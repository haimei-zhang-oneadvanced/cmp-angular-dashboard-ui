import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceUpdateComponent } from './marketplace-update.component';

describe('MarketplaceUpdateComponent', () => {
  let component: MarketplaceUpdateComponent;
  let fixture: ComponentFixture<MarketplaceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
