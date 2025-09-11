import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import * as fr from '@angular/common/locales/fr' /* Pour changer la langues */
import { registerLocaleData } from '@angular/common'; /* Pour changer la langue du pays */

registerLocaleData(fr.default);/*  Pour changer la langue du pays */

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
