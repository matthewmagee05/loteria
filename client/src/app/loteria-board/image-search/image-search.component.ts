import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoteriaBoardService } from 'src/app/loteria-board.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {

  basicForm: FormGroup;
  images;


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
    this.ltbService.searchForImages(this.basicForm.get('imageSearch').value).subscribe((res: any) => {
      console.log(res.results)
      this.images = res.results;
    })
  }

  updateCanvas(imageUrl){
    console.log(imageUrl)
    this.ltbService.setCanvasBg(imageUrl);
  }

}
