import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhhProxyGuideRoutingModule } from './phh-proxy-guide-routing.module';
import { PhhProxyGuideComponent } from './phh-proxy-guide.component';
import { GetingStartedComponent } from './geting-started/geting-started.component';

@NgModule({
  declarations: [PhhProxyGuideComponent],
  imports: [
    CommonModule,
    PhhProxyGuideRoutingModule,

    // Component
    GetingStartedComponent,
  ],
})
export class PhhProxyGuideModule {}
