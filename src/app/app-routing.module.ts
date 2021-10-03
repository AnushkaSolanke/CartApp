import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DisplayretailersComponent } from './displayretailers/displayretailers.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { RetailerComponent } from './retailer/retailer.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ShowallComponent } from './showall/showall.component';
import { SignupComponent } from './signup/signup.component';
import { Tempproduct } from './tempproduct';
import { TempproductComponent } from './tempproduct/tempproduct.component';

const routes: Routes = [
  //{path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'showall',component:ShowallComponent},
  {path:'search',component:SearchproductComponent},
  {path:'tempproduct/Admin/addretailer',component:AdminComponent},
  {path:'displayretailers',component:DisplayretailersComponent},
  {path:'tempproduct/Admin/displayretailers',component:DisplayretailersComponent},  
  {path:'tempproduct/Retailer/addproductsbyretailer',component:RetailerComponent},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  //{path:'../../displayretailers',component:DisplayretailersComponent},
  {path:'filter/:srchkeyword',component:FilterComponent},
  {path:'signup',component:SignupComponent},
  { path:'tempproduct/:id',component:TempproductComponent},
  {path:'login/signup',component:SignupComponent},
 // {path:'reset',component:ResetpasswordComponent},

  {path:'filter/:srchkeyword',component:FilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
