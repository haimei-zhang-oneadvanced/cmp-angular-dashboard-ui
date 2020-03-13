import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'dashboard-ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideHorizontalInOut', [
      state('in', style({width: '*', height: '*', opacity: 1, transform: 'translateX(0)', overflow: 'visible'})),
      state('out', style({width: 0, height: '*', opacity: 0, transform: 'translateX(50%)', overflow: 'hidden'})),
      transition('in => out', [
        animate(0)
      ]),
      transition('out => in', [
        animate('0.4s ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isShowingMoreOrders: boolean;

  constructor(private store: StoreService) { }

  ngOnInit(): void {
    this.store.layoutStatus$.subscribe(layoutStatus => {
      this.isShowingMoreOrders = layoutStatus.isShowingMoreOrders;
    });
  }

}
