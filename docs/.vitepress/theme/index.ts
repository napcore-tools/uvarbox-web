import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import PilotResults from './components/PilotResults.vue';
import '@fontsource/titillium-web/400.css';
import '@fontsource/titillium-web/400-italic.css';
import '@fontsource/titillium-web/600.css';
import '@fontsource/titillium-web/700.css';
import './napcore-theme.css';
import './uvar-content.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PilotResults', PilotResults);
  },
} satisfies Theme;
