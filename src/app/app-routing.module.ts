import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthguardService} from './authguard.service'
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path: "welcome",component:WelcomeComponent,canActivate:[AuthguardService]},{ path: 'entry', loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
