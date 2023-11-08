import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import {
	getUserInited,
	useJsonSettingsByKey,
	userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/router';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

const App = () => {
	const { theme } = useTheme();
	const dispatch = useAppDispatch();
	const inited = useSelector(getUserInited);
	const themeFromSettings = useJsonSettingsByKey('theme');
	const isFirstVisit = useJsonSettingsByKey('isFirstVisit');

	console.log(themeFromSettings);
	console.log(isFirstVisit);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
};

export default App;
