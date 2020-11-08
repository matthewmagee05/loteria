import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { LoteriaBoardService } from 'src/app/loteria-board.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('fileInput') file: ElementRef;
  basicForm: FormGroup;
  images: any[] = new Array();
  total;
  totalPages;
  currentPage: number = 0;
  pageEvent: PageEvent;


  constructor(private fb: FormBuilder, private ltbService: LoteriaBoardService) { }

  createForm(){
   this.basicForm = this.fb.group({
      imageSearch: ''
   })
  }

  ngOnInit() {
    this.createForm();
  }

  searchForImage(){
    this.ltbService.searchForImages(this.basicForm.get('imageSearch').value, this.currentPage).subscribe((res: any) => {
      this.currentPage = 1;
      if(this.paginator)
        this.paginator.pageIndex = 0;
      this.total = res.total;
      this.totalPages = res.total_pages;
      this.images = res.results;
    })
  }

  updateCanvas(imageUrl){
    this.ltbService.setCanvasBg(imageUrl);
  }

  pageChanged(event: PageEvent){
    this.currentPage = event.pageIndex+1;
    this.ltbService.searchForImages(this.basicForm.get('imageSearch').value, this.currentPage).subscribe((res: any) => {
      this.images = res.results;
    })
  }

  onFileSelected(){

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
         this.ltbService.setUploadImage(e.target.result)
      };

      reader.readAsArrayBuffer(this.file.nativeElement.files[0]);
    }
  }

}
