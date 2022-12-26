import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courseList = [
    {
      title: 'Angular', courseId: 1, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://www.esparkinfo.com/wp-content/uploads/2022/01/Dividing-Deep-Into-The-Top-Angular-10-Features.jpg',
      path: 'angular'
    },
    {
      title: 'Javascript', courseId: 2, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
      path: 'javascript'
    },
    {
      title: 'Javascript', courseId: 2, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
      path: 'javascript'
    },
    {
      title: 'Angular', courseId: 1, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://www.esparkinfo.com/wp-content/uploads/2022/01/Dividing-Deep-Into-The-Top-Angular-10-Features.jpg',
      path: 'angular'
    },
    {
      title: 'Javascript', courseId: 2, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
      path: 'javascript'
    },
    {
      title: 'Javascript', courseId: 2, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
      path: 'javascript'
    },
    {
      title: 'Angular', courseId: 1, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://www.esparkinfo.com/wp-content/uploads/2022/01/Dividing-Deep-Into-The-Top-Angular-10-Features.jpg',
      path: 'angular'
    },
    {
      title: 'Angular', courseId: 1, desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
      img: 'https://www.esparkinfo.com/wp-content/uploads/2022/01/Dividing-Deep-Into-The-Top-Angular-10-Features.jpg',
      path: 'angular'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
