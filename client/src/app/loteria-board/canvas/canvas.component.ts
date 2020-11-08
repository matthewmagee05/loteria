import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    context.fillStyle = 'blue';
    context.fillRect(0,0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)

  }

}
