import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from "./components/views/home/home.component";
import {ClmicNewComponent} from "./components/assays/clmic/clmic-new/clmic-new.component";
import {ClmicListComponent} from "./components/assays/clmic/clmic-list/clmic-list.component";
import {ClmicDetailComponent} from "./components/assays/clmic/clmic-detail/clmic-detail.component";


// ClmicListComponent
const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: "full"},
  {path:'home', component:HomeComponent},
  // {path:'footer', component:FooterComponent},
  {path:'clmic-new', component:ClmicNewComponent},
  {path:'clmic', component:ClmicListComponent},
  {path: 'clmic/:id', component: ClmicDetailComponent },
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
