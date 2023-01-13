import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; ``

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent implements OnInit {
  @Input() inputElement: any;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  /* To copy Text from Textbox */
  copyInputMessage() {console.log(this.inputElement.innerHTML)
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.inputElement.innerHTML;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.info('Copied to Clipboard', '', { positionClass: 'toast-bottom-center' });
  }

}
