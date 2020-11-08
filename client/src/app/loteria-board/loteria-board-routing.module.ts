import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardWrapperComponent } from './board-wrapper/board-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: BoardWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoteriaBoardRoutingModule { }
