import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from '@pages/options/Options';
import '@pages/options/index.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import Providers from '@root/src/components/Providers';

refreshOnUpdate('pages/options');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  root.render(
    <Providers>
      <Options />
    </Providers>,
  );
}

init();
