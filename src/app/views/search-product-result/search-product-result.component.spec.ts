import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductResultComponent } from './search-product-result.component';

describe('SearchProductResultComponent', () => {
  let component: SearchProductResultComponent;
  let fixture: ComponentFixture<SearchProductResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
