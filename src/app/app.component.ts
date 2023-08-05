import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editor') editor: QuillEditorComponent | undefined;

  ngAfterViewInit() {
    if (this.editor && this.editor.quillEditor) {
      console.log('Editor instance available:', this.editor.quillEditor);
    } else {
      console.log("Editor instance is not available yet.");
    }
  }

  getEditorContent() {
    if (this.editor && this.editor.quillEditor) {
      const content = this.editor.quillEditor.root.innerHTML;
      console.log(content);
    } else {
      console.log("Editor instance is not available yet.");
    }
  }
}
