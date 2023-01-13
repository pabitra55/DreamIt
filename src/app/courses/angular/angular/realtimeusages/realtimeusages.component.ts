import { Component, OnInit } from '@angular/core';


const TREE_DATA = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli' },
          { name: 'Brussel sprouts' },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins' },
          {
            name: 'Carrots',
            children: [
              { name: '123' },
              {
                name: '1234',
                children: [
                  { name: 'Pumpkins' },
                  { name: 'Carrots' },
                ]
              },
            ]
          },
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-realtimeusages',
  templateUrl: './realtimeusages.component.html',
  styleUrls: ['./realtimeusages.component.scss']
})


export class RealtimeusagesComponent implements OnInit {
  dataSource: any;
  outputArray: any = [];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = TREE_DATA;

    this.dataSource.forEach((element: any) => {
      if (element.children) {
        this.createLevel(element)
      }
    });

    console.log(this.dataSource, 'dataSource');
    this.createLevel(this.dataSource)
  }
  createLevel(data: any) {
    if (data.children) {
      data.children.forEach((item: any, idx: any) => {
        item.nodeLevel = idx;
        if (item.children) {
          this.createLevel(item.children)
        }
      })
    }
    console.log(this.dataSource)
  }



  visibility(item: any) {
    console.log(item);
    item.isVisible = !item.isVisible;
  }

}
