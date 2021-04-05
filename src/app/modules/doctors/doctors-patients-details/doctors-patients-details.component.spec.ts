import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPatientsDetailsComponent } from './doctors-patients-details.component';

describe('DoctorsPatientsDetailsComponent', () => {
  let component: DoctorsPatientsDetailsComponent;
  let fixture: ComponentFixture<DoctorsPatientsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsPatientsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsPatientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
