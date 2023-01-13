import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  showLeftBar: boolean = true;
  contentList = [
    { contentTitle: 'Exercise and programs', path: 'ng-exercises' },
    { contentTitle: 'Real Time Usages', path: 'realtimeusage' },
    { contentTitle: 'Interview Q&A', path: 'interviewQA' },
    { contentTitle: 'Installation Guide', path: 'installation-guide' },
    { contentTitle: 'Most Used Angular Packages', path: '' },
    { contentTitle: 'Video Tutorials', path: '' },
    { contentTitle: 'Download Docs', path: 'download-docs' },
  ];
  
  externalList = [
    { contentTitle: 'W3Schools', siteLink: 'https://www.w3schools.com/' },
    { contentTitle: 'W3Resource', siteLink: 'https://www.w3resource.com/' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
