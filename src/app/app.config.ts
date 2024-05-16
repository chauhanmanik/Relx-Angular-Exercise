import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { apiKeyInterceptor } from './interceptors/api-key.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([apiKeyInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
  ],
};
