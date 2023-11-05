import { UserRoles } from '@/shared/const/user';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutesProps } from '@/shared/types/router';
import {
	AppRoutes,
	getRouteAbout,
	getRouteAdmin,
	getRouteArticleCreate,
	getRouteArticleDetail,
	getRouteArticleEdit,
	getRouteArticles,
	getRouteForbidden,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(':id'),
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: getRouteArticles(),
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAIL]: {
		path: getRouteArticleDetail(':id'),
		element: <ArticleDetailPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: getRouteArticleCreate(),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: getRouteArticleEdit(':id'),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ADMIN]: {
		path: getRouteAdmin(),
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MANAGER],
	},
	[AppRoutes.FORBIDDEN]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage />,
	},
	// last
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
