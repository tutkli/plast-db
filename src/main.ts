import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { APP_ROUTES } from '@routes/routes.const';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { menuIcon } from '@app/svg/menu';
import { closeIcon } from '@app/svg/close';
import { searchIcon } from '@app/svg/search';
import { chevronLeftIcon } from '@app/svg/chevron-left';
import { chevronRightIcon } from '@app/svg/chevron-right';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(ReactiveFormsModule),
    provideAnimations(),
    provideHttpClient(),
    provideRouter(APP_ROUTES, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    provideSvgIcons([menuIcon, closeIcon, searchIcon, chevronLeftIcon, chevronRightIcon]),
  ],
}).catch((err) => console.error(err));
