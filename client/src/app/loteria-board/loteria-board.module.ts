import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardWrapperComponent } from './board-wrapper/board-wrapper.component';
import { LoteriaBoardRoutingModule } from './loteria-board-routing.module';
import { CanvasComponent } from './canvas/canvas.component';



@NgModule({
  declarations: [BoardWrapperComponent, CanvasComponent],
  imports: [
    CommonModule,
    LoteriaBoardRoutingModule
  ]
})
export class LoteriaBoardModule { }
