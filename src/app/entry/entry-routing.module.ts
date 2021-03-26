import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry.component';

import {RegisterComponent} from '../register/register.component'

const routes: Routes = [{ path: 'entry', component: EntryComponent },{path:'',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
