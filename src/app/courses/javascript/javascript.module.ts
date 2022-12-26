import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript/javascript.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: JavascriptComponent },
];

@NgModule({
  declarations: [
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JavascriptModule { }
