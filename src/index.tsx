import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
