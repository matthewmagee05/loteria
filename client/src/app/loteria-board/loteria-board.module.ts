import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardWrapperComponent } from './board-wrapper/board-wrapper.component';
import { LoteriaBoardRoutingModule } from './loteria-board-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { MaterialModule } from '../material/material.module';
import { ImageSearchComponent } from './image-search/image-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropWrapperComponent } from './drag-drop-wrapper/drag-drop-wrapper.component';
import { AngularDraggableModule } from 'angular2-draggable';



@NgModule({
  declarations: [BoardWrapperComponent, CanvasComponent, ImageSearchComponent, DragDropWrapperComponent],
  imports: [
    CommonModule,
    LoteriaBoardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularDraggableModule
  ]
})
export class LoteriaBoardModule { }
