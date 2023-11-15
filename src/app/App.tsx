import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeature } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

const App = () => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);

	useEffect(() => {
		if (!inited) {
			dispatch(initAuthData());
		}
	}, [dispatch, inited]);

	if (!inited) {
		return (
			<ToggleFeature
				feature="isAppRedesigned"
				on={
					<div
						id="app"
						className={classNames('app_redesigned', {}, [theme])}
					>
						<AppLoaderLayout />
					</div>
				}
				off={<PageLoader />}
			/>
		);
	}

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			off={
				<div
					id="app"
					className={classNames('app', {}, [theme])}
				>
					<Suspense fallback="">
						<Navbar />
						<div className="content-page">
							<Sidebar />
							<AppRouter />
						</div>
					</Suspense>
				</div>
			}
			on={
				<div
					id="app"
					className={classNames('app_redesigned', {}, [theme])}
				>
					<Suspense fallback="">
						<MainLayout
							header={<Navbar />}
							content={<AppRouter />}
							sidebar={<Sidebar />}
						/>
					</Suspense>
				</div>
			}
		/>
	);
};

export default App;
