import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, win32 } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const publications = join(root, 'docs/public/publications');
const publicAssets = join(root, 'docs/public');
const permittedDocuments = new Set([
  'uvarbox-final-report-eu-2025.pdf',
  'uvarbox-project-leaflet-2021.pdf',
  'uvarbox-brochure-2022.pdf',
]);

const actualDocuments = readdirSync(publications);
const unexpectedDocuments = actualDocuments.filter((file) => !permittedDocuments.has(file));
const missingDocuments = [...permittedDocuments].filter((file) => !existsSync(join(publications, file)));

const textFiles = [];
const publicFiles = [];
function collectPublicFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) collectPublicFiles(join(dir, entry.name));
    else if (entry.isFile()) publicFiles.push(join(dir, entry.name));
  }
}
collectPublicFiles(publicAssets);

function collectMarkdown(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== '.vitepress') collectMarkdown(join(dir, entry.name));
    else if (entry.isFile() && entry.name.endsWith('.md')) textFiles.push(join(dir, entry.name));
  }
}
collectMarkdown(join(root, 'docs'));

const prohibited = [
  /UVARBox_Risks_and_EC_Support/i,
  /UVARBox_Checklist_Limpeza_Codigo_GitHub/i,
  /\bPRIVATE\s*[—-]\s*INTERNAL\b/i,
  /https?:\/\/(?:www\.)?uvarbox\.eu\//i,
  /(?:href|link):?\s*["']?\/(?:login|register|signup)\b/i,
];
const violations = [];
for (const file of textFiles) {
  const content = readFileSync(file, 'utf8');
  if (prohibited.some((pattern) => pattern.test(content))) {
    violations.push(relative(root, file));
  }
}

const forbiddenAssets = publicFiles.filter((file) =>
  /\.(?:docx?|pptx?|xlsx?|xml|zip|env|bak|key|pem)$/i.test(file) ||
  (file.toLowerCase().endsWith('.pdf') && !permittedDocuments.has(win32.basename(file))),
);

const pilotData = JSON.parse(readFileSync(join(root, 'docs/data/pilot-results.json'), 'utf8'));
const count = (items) => items.reduce((sum, item) => sum + item.count, 0);
const inconsistentResults =
  count(pilotData.types) !== pilotData.total ||
  count(pilotData.countries) !== pilotData.total ||
  pilotData.countries.length !== pilotData.countriesRepresented ||
  pilotData.countries.filter((country) => country.pilot).length !== pilotData.focusCountries ||
  [...pilotData.types, ...pilotData.countries].some((item) => !Number.isInteger(item.count) || item.count < 0);

if (unexpectedDocuments.length || missingDocuments.length || violations.length || forbiddenAssets.length || inconsistentResults) {
  console.error('Publication content check failed.');
  if (unexpectedDocuments.length) console.error('Unreviewed files in public publications:', unexpectedDocuments);
  if (missingDocuments.length) console.error('Missing approved public documents:', missingDocuments);
  if (violations.length) console.error('Potentially unsafe links or text in:', violations);
  if (forbiddenAssets.length) console.error('Files that require review before publication:', forbiddenAssets.map((file) => relative(root, file)));
  if (inconsistentResults) console.error('The pilot data totals, countries or types are inconsistent.');
  process.exitCode = 1;
} else {
  console.log(`Content check passed: ${textFiles.length} pages and ${actualDocuments.length} approved PDFs.`);
}

