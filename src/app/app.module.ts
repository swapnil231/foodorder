import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { ChekoutComponent } from './components/chekout/chekout.component';
import { ChekoutpageComponent } from './components/chekoutpage/chekoutpage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { SerchboxComponent } from './components/serchbox/serchbox.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TagsComponent } from './components/tags/tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ChekoutpageComponent,
    LandingpageComponent,
    DashboardComponent,
    StarRatingComponent,
    AllproductsComponent,
    SearchresultsComponent,
    SerchboxComponent,
    NotfoundComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
