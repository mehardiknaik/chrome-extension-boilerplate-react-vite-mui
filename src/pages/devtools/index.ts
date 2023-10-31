try {
  chrome.devtools.panels.create(
    'chrome-extension-boilerplate-react-vite-mui',
    'icon-34.png',
    'src/pages/panel/index.html',
  );
} catch (e) {
  console.error(e);
}
