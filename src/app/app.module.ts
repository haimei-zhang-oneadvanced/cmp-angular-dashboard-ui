import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MosaicIconsComponent } from '~components/mosaic-icons/mosaic-icons.component';

import { HomeComponent } from '~views/home/home.component';
import { SearchProductResultComponent } from '~views/search-product-result/search-product-result.component';

import { NavbarComponent } from '~components/navbar/navbar.component';
import { NavigationComponent } from '~components/navigation/navigation.component';
import { SearchProductComponent } from '~components/search-product/search-product.component';
import { MarketplaceNewsComponent } from '~components/marketplace-news/marketplace-news.component';
import { MoreOrderTypesComponent } from '~components/more-order-types/more-order-types.component';
import { InsightsComponent } from '~components/insights/insights.component';
import { MarketplaceUpdateComponent } from '~components/marketplace-update/marketplace-update.component';
import { RecentPurchasesComponent } from '~components/recent-purchases/recent-purchases.component';
import { ManageOrdersComponent } from '~components/manage-orders/manage-orders.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MosaicIconsComponent,
    HomeComponent,
    NavbarComponent,
    NavigationComponent,
    SearchProductComponent,
    SearchProductResultComponent,
    MarketplaceNewsComponent,
    MoreOrderTypesComponent,
    InsightsComponent,
    MarketplaceUpdateComponent,
    RecentPurchasesComponent,
    ManageOrdersComponent,
    SearchFilterComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
