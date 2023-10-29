import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { ChekoutComponent } from './components/chekout/chekout.component';
import { HeaderComponent } from './components/header/header.component';
import { ChekoutpageComponent } from './components/chekoutpage/chekoutpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'chekout', component: ChekoutpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LandingpageComponent },
  { path: 'cart', component: LandingpageComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'search/:serchTerm', component: SearchresultsComponent },
  { path: 'tag/:tag', component: SearchresultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
