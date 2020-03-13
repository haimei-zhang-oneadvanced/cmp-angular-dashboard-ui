import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'dashboard-ui-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  value: string;
  isShowingMoreOrders: boolean;

  constructor(private router: Router,
              private store: StoreService) { }

  ngOnInit(): void {
    this.store.layoutStatus$.subscribe(layoutStatus => {
      this.isShowingMoreOrders = layoutStatus.isShowingMoreOrders;
    });
  }

  search(): void {
    console.log(this.value);
    this.navigateToSearchPage();
  }

  toggleSidebar(): void {
    this.store.updateLayoutStatus({isShowingMoreOrders: !this.isShowingMoreOrders});
  }

  private navigateToSearchPage(): void {
    this.router.navigate(['/product-search-result']);
  }

}
