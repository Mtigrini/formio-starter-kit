import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { AuthConfig, AppConfig } from '../config';
import { FormioGrid } from 'angular-formio/grid/grid.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';

import { UserModule } from './user/user.module';
import { VolunteerModule } from './event/volunteer/volunteer.module';
import { VolunteerViewComponent } from './volunteer/volunteer-view/volunteer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    VolunteerViewComponent
  ],
  imports: [
    BrowserModule,
    FormioModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      },
      {
        path: 'user',
        loadChildren: () => UserModule
      }
    ])
  ],
  providers: [
    FormioGrid,
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
