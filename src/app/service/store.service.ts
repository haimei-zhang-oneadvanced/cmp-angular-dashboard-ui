import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  layoutStatus: any = StoreService.getInitialData();

  private layoutStatusSource = new BehaviorSubject<any>(this.layoutStatus);
  layoutStatus$ = this.layoutStatusSource.asObservable();

  private static getInitialData(): any {
    return {
      isShowingMoreOrders: false
    };
  }

  updateLayoutStatus(layoutStatus: any): void {
    const newStatus = R.mergeDeepRight(this.layoutStatusSource, layoutStatus);
    this.layoutStatusSource.next(newStatus);
  }

  resetLayoutStatus(): void {
    this.layoutStatus = StoreService.getInitialData();
    this.layoutStatusSource.next(StoreService.getInitialData());
  }
}
