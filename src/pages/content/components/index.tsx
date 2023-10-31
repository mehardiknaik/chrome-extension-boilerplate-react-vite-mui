import { createRoot } from 'react-dom/client';
import App from '@src/pages/content/components/Demo/app';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import Providers from '@root/src/components/Providers';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'chrome-extension-boilerplate-react-vite-content-view-root';

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

const emotionRoot = document.createElement('style');

shadowRoot.appendChild(emotionRoot);

const cache = createCache({
  key: 'mui',
  prepend: true,
  container: emotionRoot,
});

createRoot(rootIntoShadow).render(
  <CacheProvider value={cache}>
    <Providers>
      <App />
    </Providers>
  </CacheProvider>,
);
