import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyPrintComponent } from './family-print.component';

describe('FamilyPrintComponent', () => {
  let component: FamilyPrintComponent;
  let fixture: ComponentFixture<FamilyPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
