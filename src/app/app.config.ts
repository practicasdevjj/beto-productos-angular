import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
<<<<<<< HEAD

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
=======
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration: 3000}}]
>>>>>>> 0bd372da00f93f47caf5b4420ce259516460e97a
};
