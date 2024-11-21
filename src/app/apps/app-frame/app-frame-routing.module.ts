import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFrameComponent } from './app-frame.component';

const routes: Routes = [
  {
    path: '',
    component: AppFrameComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'phh-proxy-guide',
      },
      {
        path: 'phh-proxy-guide',
        loadChildren: () =>
          import('../public/documents/phh-proxy-guide/phh-proxy-guide.module').then((m) => m.PhhProxyGuideModule),
      },
      {
        path: 'get-started',
        loadComponent: () =>
          import(
            '../public/documents/phh-proxy-guide/geting-started/geting-started.component'
          ).then((c) => c.GetingStartedComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFrameRoutingModule {}
