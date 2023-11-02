import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdmin } from '@/shared/const/router';
import { UserRoles } from '@/shared/const/user';

describe('app/router/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, {
      route: '/asdasda',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  // test('Редирект неавторизованного пользователя на главну', async () => {
  //   componentRender(<AppRouter />, {
  //     route: getRouteProfile('1'),
  //   });

  //   const page = await screen.findByTestId('MainPage');
  //   expect(page).toBeInTheDocument();
  // });

  // test('Доступ к закрытой странице для авторизованного пользователя', async () => {
  //   componentRender(<AppRouter />, {
  //     route: getRouteProfile('1'),
  //     initialState: {
  //       user: {
  //         authData: {},
  //         _inited: true,
  //       },
  //     },
  //   });

  //   const page = await screen.findByTestId('ProfilePage');
  //   expect(page).toBeInTheDocument();
  // });

  test('Доступ запрещен(отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: { roles: [UserRoles.USER] },
          _inited: true,
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен(роль есть)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: {
          authData: { roles: [UserRoles.ADMIN] },
          _inited: true,
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
