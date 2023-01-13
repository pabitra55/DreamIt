import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selectColor: EventEmitter<any> = new EventEmitter();
  currentColor = 'light-theme';

  colorList = [
    { themeName: 'Light', themeId: 'light-theme' },
    { themeName: 'Dark', themeId: 'dark-theme' },
    { themeName: 'Pink', themeId: 'pink-theme' },
    { themeName: 'Blue', themeId: 'blue-theme' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  triggerColor(event: any) {
    console.log(event);

    this.selectColor.emit(this.currentColor);
    localStorage.setItem('currentColor', this.currentColor);
  }

}
