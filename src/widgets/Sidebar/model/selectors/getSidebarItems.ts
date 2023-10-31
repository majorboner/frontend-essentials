import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon,
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticlesIcon,
        },
      );
    }
    return sidebarItemsList;
  },
);
