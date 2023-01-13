import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ThemeServiceService } from './shared/_services/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dreamIt';
  public theme: string = 'theme-light';
  public select: string = '';
  currentColor: any;

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    let currentTheme = localStorage.getItem('currentColor');
    currentTheme != undefined ? this.currentColor = currentTheme : 'light-theme';
    this
  }


  public changeTheme(e: any): void {
    this.theme = this.select;
  }

  selectColor(color: any) {
    console.log(color);
    this.currentColor = color;
    let currentTheme = localStorage.getItem('currentColor');
    currentTheme != undefined ? currentTheme : 'light-theme';
  }


}
