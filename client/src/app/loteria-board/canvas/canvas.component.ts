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

    });

    this.lbService.getUploadImage().subscribe((data: ArrayBuffer) => {
      if(data){
        this.updateImageBuffer(data)
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

  updateImageBuffer(data: ArrayBuffer){

    const bytes = new Uint8Array(data);

    const image = new Image();
    image.src = 'data:image/png;base64,'+this.encode(bytes);

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

  }

  encode (input) {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
        chr1 = input[i++];
        chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
        chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                  keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output;
}

}
