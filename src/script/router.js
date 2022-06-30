import homePage from './pages/homePage';
import postPage from './pages/postPage';
import settingPage from './pages/settingPage';

export const router = () => {
  const routes = [
    {
      path: '/',
      view: homePage,
    },
    {
      path: '/posts',
      view: postPage,
    },
    {
      path: '/settings',
      view: settingPage,
    },
  ];

  const potentialMatch = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatch.find((x) => x.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const page = new match.route.view();

  const display = document.querySelector('#show-page');
  display.innerHTML = page.getHtml();
};

// document.addEventListener('DOMContentLoaded', () => {
//     router();
// });
