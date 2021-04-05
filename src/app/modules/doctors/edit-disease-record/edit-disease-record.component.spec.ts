import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiseaseRecordComponent } from './edit-disease-record.component';

describe('EditDiseaseRecordComponent', () => {
  let component: EditDiseaseRecordComponent;
  let fixture: ComponentFixture<EditDiseaseRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiseaseRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiseaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
