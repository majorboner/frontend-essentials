export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/';
export const getRouteNotFound = () => '*';
export const getRouteAbout = () => '/about';
export const getRouteAdmin = () => '/admin';
export const getRouteArticles = () => '/articles';
export const getRouteForbidden = () => '/forbidden';
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteProfile = (id: string) => `profile/${id}`;
export const getRouteArticleDetail = (id: string) => `/articles/${id}`;
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
