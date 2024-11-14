import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFrameComponent } from './app-frame.component';

const routes: Routes = [
  {
    path: '',
    component: AppFrameComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFrameRoutingModule {}
