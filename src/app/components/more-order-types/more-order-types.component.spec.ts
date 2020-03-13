import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOrderTypesComponent } from './more-order-types.component';

describe('MoreOrderTypesComponent', () => {
  let component: MoreOrderTypesComponent;
  let fixture: ComponentFixture<MoreOrderTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOrderTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOrderTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
