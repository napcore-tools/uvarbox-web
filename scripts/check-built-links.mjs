import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const output = join(root, 'docs/.vitepress/dist');
const base = process.env.VITEPRESS_BASE || '/';
const paths = [];

function visit(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) paths.push(path);
  }
}
visit(output);

const broken = [];
for (const page of paths) {
  const html = readFileSync(page, 'utf8');
  const refs = html.matchAll(/\b(?:href|src)="([^"]+)"/g);
  for (const [, ref] of refs) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue;
    if (!ref.startsWith(base)) {
      broken.push(`${page}: path missing configured base: ${ref}`);
      continue;
    }
    const name = decodeURIComponent(ref.slice(base.length).split(/[?#]/, 1)[0]);
    const asset = join(output, name || 'index.html');
    if (!existsSync(asset)) broken.push(`${page}: target not found: ${ref}`);
  }
}

if (broken.length) {
  console.error('Built-site link verification failed:\n' + broken.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Built-site links verified: ${paths.length} HTML pages at base ${base}`);
}
