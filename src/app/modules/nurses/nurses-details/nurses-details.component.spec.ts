import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesDetailsComponent } from './nurses-details.component';

describe('NursesDetailsComponent', () => {
  let component: NursesDetailsComponent;
  let fixture: ComponentFixture<NursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NursesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
