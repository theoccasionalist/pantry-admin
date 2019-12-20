import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGridButtonsComponent } from './type-grid-buttons.component';

describe('TypeGridButtonsComponent', () => {
  let component: TypeGridButtonsComponent;
  let fixture: ComponentFixture<TypeGridButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeGridButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGridButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
