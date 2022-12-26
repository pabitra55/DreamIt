import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'angular',
    loadChildren: () => import('./../courses/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./../courses/javascript/javascript.module').then(m => m.JavascriptModule)
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
