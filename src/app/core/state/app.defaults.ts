import { AppStateModel } from './app.models';

export const APP_DEFAULTS: AppStateModel = {
  browserTabTitle: 'app.browser-tab-title',
  language: 'en',
  location: null,
  zmanim: {
    form: {
      date: new Date(),
    },
    info: null,
  },
};
