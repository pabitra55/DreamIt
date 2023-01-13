import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { RouterModule, Routes } from '@angular/router';
import { RealtimeusagesComponent } from './angular/realtimeusages/realtimeusages.component';
import { NgDownloadDocsComponent } from './angular/ng-download-docs/ng-download-docs.component';
import { InstallationGuideComponent } from './angular/installation-guide/installation-guide.component';
import { NgInterviewQAAComponent } from './angular/ng-interview-q-aa/ng-interview-q-aa.component';
import { NgExerciseComponent } from './angular/ng-exercise/ng-exercise.component';
import { CopyToClipboardComponent } from 'src/app/utilities/copy-to-clipboard/copy-to-clipboard.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '', component: AngularComponent,
    children: [
      { path: 'ng-exercises', component: NgExerciseComponent },
      { path: 'realtimeusage', component: RealtimeusagesComponent },
      { path: 'download-docs', component: NgDownloadDocsComponent },
      { path: 'installation-guide', component: InstallationGuideComponent },
      { path: 'interviewQA', component: NgInterviewQAAComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AngularComponent,
    RealtimeusagesComponent,
    NgDownloadDocsComponent,
    InstallationGuideComponent,
    NgInterviewQAAComponent,
    NgExerciseComponent,
    CopyToClipboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot(),
  ],
  providers: [ToastrService]
})
export class AngularModule { }
