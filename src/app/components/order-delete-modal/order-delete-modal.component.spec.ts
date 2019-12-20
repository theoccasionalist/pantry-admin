import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeleteModalComponent } from './order-delete-modal.component';

describe('OrderDeleteModalComponent', () => {
  let component: OrderDeleteModalComponent;
  let fixture: ComponentFixture<OrderDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
