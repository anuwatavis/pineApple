import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ImacComponentComponent } from './pages/imac-component/imac-component.component';
import { IpadComponent } from './pages/ipad/ipad.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { WatchComponent } from './pages/watch/watch.component';
import { TvComponent } from './pages/tv/tv.component';
import { MusicComponent } from './pages/music/music.component';
import { SupportComponent } from './pages/support/support.component';
import { NavItemsComponent } from './shared/nav-items/nav-items.component';
import { LoginPageComponent } from './layouts/backend/login-page/login-page.component';
import { LoginComponent } from './pages/backend/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ImacComponentComponent,
    IpadComponent,
    IphoneComponent,
    WatchComponent,
    TvComponent,
    MusicComponent,
    SupportComponent,
    NavItemsComponent,
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
