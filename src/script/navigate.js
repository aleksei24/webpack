import { router } from './router';

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
