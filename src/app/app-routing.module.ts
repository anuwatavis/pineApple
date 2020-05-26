import { LoginPageComponent } from './layouts/backend/login-page/login-page.component';
import { LoginComponent } from './pages/backend/login/login.component';
import { SupportComponent } from './pages/support/support.component';
import { MusicComponent } from './pages/music/music.component';
import { TvComponent } from './pages/tv/tv.component';
import { IphoneComponent } from './pages/iphone/iphone.component';
import { IpadComponent } from './pages/ipad/ipad.component';
import { ImacComponentComponent } from './pages/imac-component/imac-component.component';
import { HomeComponent } from './pages/home/home.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './pages/watch/watch.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'mac', component: ImacComponentComponent },
      { path: 'ipad', component: IpadComponent },
      { path: 'iphone', component: IphoneComponent },
      { path: 'watch', component: WatchComponent },
      { path: 'tv', component: TvComponent },
      { path: 'music', component: MusicComponent },
      { path: 'support', component: SupportComponent },
    ],
  },
  {
    path: 'backend',
    component: LoginPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
