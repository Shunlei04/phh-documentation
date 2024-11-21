import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetingStartedComponent } from './geting-started/geting-started.component';
import { PhhProxyGuideComponent } from './phh-proxy-guide.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'phh-proxy-guide', 
    pathMatch: 'full',
  },
  {
    path: 'phh-proxy-guide',
    component: PhhProxyGuideComponent,
  },
  {
    path: 'get-started',
    component: GetingStartedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhhProxyGuideRoutingModule {}
