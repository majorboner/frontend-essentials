import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: HomeIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Страница профиля',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Статьи',
    Icon: ArticlesIcon,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon,
  },
];
