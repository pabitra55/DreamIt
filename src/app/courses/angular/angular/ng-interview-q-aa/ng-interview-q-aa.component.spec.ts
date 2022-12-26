import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInterviewQAAComponent } from './ng-interview-q-aa.component';

describe('NgInterviewQAAComponent', () => {
  let component: NgInterviewQAAComponent;
  let fixture: ComponentFixture<NgInterviewQAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgInterviewQAAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgInterviewQAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
