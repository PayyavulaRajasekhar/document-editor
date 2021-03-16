import { Component } from '@angular/core';
import { asBlob } from 'html-docx-js-typescript';
// if you want to save the docx file, you need import 'file-saver'
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'document-editor';
  convertor;
  editorData = '<h1>Hello, world!</h1>';
  constructor() {
  }

  onSave() {
    asBlob(this.editorData).then(data => {
      saveAs(data, 'file.docx'); // save as docx file
    });
  }

}
