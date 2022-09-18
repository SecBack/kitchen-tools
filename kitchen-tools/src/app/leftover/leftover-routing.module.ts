import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftoverPage } from './leftover.page';

const routes: Routes = [
  {
    path: '',
    component: LeftoverPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeftoverPageRoutingModule {}
