import './app/styles/index.scss';
import App from 'app/App';
import { Root, createRoot } from 'react-dom/client';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';

const domNode = document.getElementById('root')!;
const root: Root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
