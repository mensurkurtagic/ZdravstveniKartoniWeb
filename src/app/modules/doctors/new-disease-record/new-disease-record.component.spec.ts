import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiseaseRecordComponent } from './new-disease-record.component';

describe('NewDiseaseRecordComponent', () => {
  let component: NewDiseaseRecordComponent;
  let fixture: ComponentFixture<NewDiseaseRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiseaseRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiseaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
