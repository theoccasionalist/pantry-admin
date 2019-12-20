import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubTypeEditComponent } from './sub-type-edit.component';

describe('SubTypeEditComponent', () => {
  let component: SubTypeEditComponent;
  let fixture: ComponentFixture<SubTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
