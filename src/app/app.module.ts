import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { TempproductComponent } from './tempproduct/tempproduct.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ShowallComponent } from './showall/showall.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayretailersComponent } from './displayretailers/displayretailers.component';
import { RetailerComponent } from './retailer/retailer.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    TempproductComponent,
    AdminComponent,
    ShowallComponent,
    SearchproductComponent,
    FilterComponent,
    LoginComponent,
    SignupComponent,
    DisplayretailersComponent,
    RetailerComponent,
    UserprofileComponent,
    WishlistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
