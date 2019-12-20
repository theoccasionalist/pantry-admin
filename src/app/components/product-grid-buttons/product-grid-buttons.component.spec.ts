import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridButtonsComponent } from './product-grid-buttons.component';

describe('ProductGridButtonsComponent', () => {
  let component: ProductGridButtonsComponent;
  let fixture: ComponentFixture<ProductGridButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGridButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
