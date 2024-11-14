import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppFrameRoutingModule } from './app-frame-routing.module';
import { AppFrameComponent } from './app-frame.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [AppFrameComponent],
  imports: [
    CommonModule,
    AppFrameRoutingModule,

    // components
    ToolbarComponent,
    SidebarComponent,
  ],
})
export class AppFrameModule {}
