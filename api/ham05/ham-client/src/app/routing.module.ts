import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from "./components/views/home/home.component";
import {ClmicNewComponent} from "./components/assays/clmic/clmic-new/clmic-new.component";
const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: "full"},
  {path:'home', component:HomeComponent},
  // {path:'footer', component:FooterComponent},
  {path:'clmic-new', component:ClmicNewComponent},
  // {path:'cl-hep', component:ClHepComponent},
  // {path: 'cl-mic/:id', component: ClmicDetailComponent },


];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class RoutingModule { }
