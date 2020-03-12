import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-ui-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  value: string;
  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    console.log(this.value);
  }

}
