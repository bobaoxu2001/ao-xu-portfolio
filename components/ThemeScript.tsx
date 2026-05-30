// Inline blocking script that resolves the theme before paint to avoid FOUC.
// Runs once in <head>; reads localStorage, falls back to system preference.
const SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored === 'dark' || (stored == null && prefersDark);
    var root = document.documentElement;
    if (dark) root.classList.add('dark');
    root.style.colorScheme = dark ? 'dark' : 'light';
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
