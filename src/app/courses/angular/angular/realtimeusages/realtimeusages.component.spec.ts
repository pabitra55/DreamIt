import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeusagesComponent } from './realtimeusages.component';

describe('RealtimeusagesComponent', () => {
  let component: RealtimeusagesComponent;
  let fixture: ComponentFixture<RealtimeusagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealtimeusagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeusagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
