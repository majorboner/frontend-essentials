import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';
import { Root, createRoot } from 'react-dom/client';
import App from '@/app/App';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

const domNode = document.getElementById('root')!;
const root: Root = createRoot(domNode);

root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ForceUpdateProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</ForceUpdateProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>,
);
