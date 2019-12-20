import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGridButtonsComponent } from './order-grid-buttons.component';

describe('OrderGridButtonsComponent', () => {
  let component: OrderGridButtonsComponent;
  let fixture: ComponentFixture<OrderGridButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderGridButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGridButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
