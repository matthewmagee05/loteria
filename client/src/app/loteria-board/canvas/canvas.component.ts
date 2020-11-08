import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoteriaBoardService } from 'src/app/loteria-board.service';
import {takeUntil} from 'rxjs/operators';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('canvasImg') canvasImg: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  imageUrl;

  _destroying$: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  constructor(private lbService: LoteriaBoardService) { }

  ngOnInit(): void {
    this.lbService.getCanvasBg().subscribe((imageUrl: string) => {
      if(imageUrl.length > 1){
        this.imageUrl = imageUrl;
        this.updateImage(imageUrl);
      }

    })
  }


  ngOnDestroy(): void {
    this._destroying$.next();
  }

  updateImage(imageUrl: string){
    const image = new Image();
    image.src = imageUrl;
    image.setAttribute('crossOrigin', 'anonymous');
    const context = this.canvas.nativeElement.getContext('2d');
    image.onload = () => {
      context.drawImage(image, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    }

    //get DPI
    let dpi = window.devicePixelRatio;
    //get canvas
    let canvas = this.canvas.nativeElement;

    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);


  }

  downloadFile(){
    const link = document.createElement('a');
    link.download = 'test.png';
    link.href = this.canvas.nativeElement.toDataURL();
    link.click();

      // this.downloadLink.nativeElement.href = this.canvas.nativeElement.toDataURL('image/png');
      // this.downloadLink.nativeElement.download = 'marble-diagram.png';
      // this.downloadLink.nativeElement.click();

  }

}
