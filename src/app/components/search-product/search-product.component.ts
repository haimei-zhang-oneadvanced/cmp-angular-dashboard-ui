import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-ui-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  value: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    console.log(this.value);
    this.navigateToSearchPage();
  }

  private navigateToSearchPage(): void {
    this.router.navigate(['/product-search-result']);
  }

}
