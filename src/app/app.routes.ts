import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./apps/app-frame/app-frame.module').then((m) => m.AppFrameModule),
  },
];
