import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryOverviewComponent } from './pantry-overview.component';

describe('PantryOverviewComponent', () => {
  let component: PantryOverviewComponent;
  let fixture: ComponentFixture<PantryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
