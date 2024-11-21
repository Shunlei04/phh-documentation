import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OutlinesComponent } from '../public/documents/components/outlines/outlines.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [
    CommonModule,
    AppFrameRoutingModule,
    MatSidenavModule,
    RouterOutlet,

    // component
    SidebarComponent,
    ToolbarComponent,
    OutlinesComponent,
  ],
})
export class AppFrameModule {}
