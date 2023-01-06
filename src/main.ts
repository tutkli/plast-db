import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { APP_ROUTES } from '@routes/routes.const';
import { InitService } from '@services/init/init.service';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { menuIcon } from '@app/svg/menu';
import { closeIcon } from '@app/svg/close';
import { searchIcon } from '@app/svg/search';

if (environment.production) {
  enableProdMode();
}

export function initializeAppFactory(initService: InitService) {
  return (): void => {
    initService.initializeApp().then();
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideSvgIcons([menuIcon, closeIcon, searchIcon]),
    InitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [InitService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
