import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { AppContextProvider } from 'context';

import App from 'modules';

import './index.scss';
import { WebSocketProvider } from 'context/webSocket';

const engine = new Styletron();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <AppContextProvider>
          <WebSocketProvider>
            <App />
          </WebSocketProvider>
        </AppContextProvider>
      </BaseProvider>
    </StyletronProvider>
  </>
);
