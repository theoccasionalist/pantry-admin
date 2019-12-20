import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPrintComponent } from './cart-print.component';

describe('CartPrintComponent', () => {
  let component: CartPrintComponent;
  let fixture: ComponentFixture<CartPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
