import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-download-docs',
  templateUrl: './ng-download-docs.component.html',
  styleUrls: ['./ng-download-docs.component.scss']
})
export class NgDownloadDocsComponent implements OnInit {
  pdfSrc = "../../../../../assets/static_documents/resume.pdf";
  constructor() { }

  documentList = [
    { desc: 'Angular Installation Guide', type: 'docx', downloadPath: '../../../../../assets/static_documents/Angular installation.docx' },
    { desc: 'Node Installation Guide', type: 'pdf', downloadPath: '' },
    { desc: 'Angular Interview Q&A', type: 'pdf', downloadPath: '' },
    { desc: 'Javascript Interview Q&A', type: 'pdf', downloadPath: '' },
    { desc: 'CSS Interview Q&A', type: 'pdf', downloadPath: '' },
    { desc: 'HTML Interview Q&A', type: 'pdf', downloadPath: '' },
    { desc: 'Basic Resume Format (DOCX)', type: 'docx', downloadPath: '../../../../../assets/static_documents/resume.docx' },
    { desc: 'Basic Resume Format (PDF)', type: 'pdf', downloadPath: '../../../../../assets/static_documents/resume.pdf' },
  ]
  ngOnInit(): void {
  }

  downloadDoc(doc: any) {
    console.log(doc)
  }

  viewDoc(doc: any) {
    console.log(doc)
  }
}
