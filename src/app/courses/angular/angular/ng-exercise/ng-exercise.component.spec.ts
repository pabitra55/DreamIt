import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgExerciseComponent } from './ng-exercise.component';

describe('NgExerciseComponent', () => {
  let component: NgExerciseComponent;
  let fixture: ComponentFixture<NgExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
