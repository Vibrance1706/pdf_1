import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
  public pdfSrc: string = 'https://tmpfiles.org/dl/12278925/part-of-speech_tagging_using_multiview_learning.pdf';  // Path to your PDF file
}


