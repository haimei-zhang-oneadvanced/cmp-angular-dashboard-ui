import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosaicIconsComponent } from '~components/mosaic-icons/mosaic-icons.component';

import { HomeComponent } from '~views/home/home.component';
import { SearchProductResultComponent } from '~views/search-product-result/search-product-result.component';

import { NavbarComponent } from '~components/navbar/navbar.component';
import { NavigationComponent } from '~components/navigation/navigation.component';
import { SearchProductComponent } from '~components/search-product/search-product.component';
import { MarketplaceNewsComponent } from '~components/marketplace-news/marketplace-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    HomeComponent,
    NavbarComponent,
    NavigationComponent,
    SearchProductComponent,
    SearchProductResultComponent,
    MarketplaceNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
