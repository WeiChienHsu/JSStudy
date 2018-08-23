import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ClMicComponent} from "./components/cl-mic/cl-mic.component";
import {ClHepComponent} from "./components/cl-hep/cl-hep.component";
import {ClmicDetailComponent} from "./components/clmic-detail/clmic-detail.component";



const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: "full"},
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'cl-mic', component:ClMicComponent},
  {path:'cl-hep', component:ClHepComponent},
  {path: 'cl-mic/:id', component: ClmicDetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
