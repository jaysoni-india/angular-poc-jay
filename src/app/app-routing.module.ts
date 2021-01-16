import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CommingSoonComponent} from './components/comming-soon/comming-soon.component';
import {Error404Component} from './components/error404/error404.component';
import {VerifyComponent} from './components/verify/verify.component';
import {VerifyGuard} from './services/verify.guard'; // CLI imports router

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {
    path: 'component-interaction', canLoad: [VerifyGuard],
    loadChildren: () => import('./modules/component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  },
  { path: 'http-request', component: CommingSoonComponent },
  { path: 'async-pipe', component: CommingSoonComponent },
  { path: 'verify', component: VerifyComponent },
  { path: '**', component: Error404Component }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
