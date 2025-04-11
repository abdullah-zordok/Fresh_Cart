import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { setHeaderInterceptor } from './shared/interceptors/setHeader/set-header.interceptor';
import { errorInterceptor } from './shared/interceptors/error/error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { spinnerInterceptor } from './shared/interceptors/spinner/spinner.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [ provideAnimations(), provideToastr(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([setHeaderInterceptor, errorInterceptor, spinnerInterceptor])),

    importProvidersFrom( RouterModule, BrowserAnimationsModule, ToastrModule, NgxSpinnerModule,
      TranslateModule.forRoot({
        loader:{
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
     ), provideAnimationsAsync()
  ]
};
