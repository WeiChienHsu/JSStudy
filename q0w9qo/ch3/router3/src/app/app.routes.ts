import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";

const appRoutes: Routes = [
/*  {
    path: "",
    redirectTo: "problems",
    pathMatch: "full"
  },
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    path: 'problems/:id',
    component: ProblemDetailComponent
  },
  {
    path: '**',
    redirectTo: "problems",
  }*/

  {path:'', component:HomeComponent},
  {path:'product', component:ProductComponent}
];

export const routing = RouterModule.forRoot(appRoutes);


/*

const routes: Routes = [
  //Routes

  //   {path:'/', component:HomeComponent},
  // {path:'/product', component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */
