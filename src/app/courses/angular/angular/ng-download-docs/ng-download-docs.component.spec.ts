import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDownloadDocsComponent } from './ng-download-docs.component';

describe('NgDownloadDocsComponent', () => {
  let component: NgDownloadDocsComponent;
  let fixture: ComponentFixture<NgDownloadDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDownloadDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDownloadDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
