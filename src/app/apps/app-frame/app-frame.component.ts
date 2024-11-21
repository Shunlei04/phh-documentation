import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SectionService } from '../../services/section/section.service';
import { filter } from 'rxjs';
import { SidebarService } from './services/sidebar/sidebar.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-app-frame',
  templateUrl: './app-frame.component.html',
  styleUrl: './app-frame.component.scss',
  host: { class: 'app-host' },
})
export class AppFrameComponent {
  isSidebarOpen = true;
  drawerMode: 'side' | 'over' = 'side';

  constructor(
    private sidebarService: SidebarService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.sidebarService.sidebarStateSub.subscribe((state) => {
      this.isSidebarOpen = state;
    });

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        if (result.matches) {
          this.isSidebarOpen = true;
          this.drawerMode = 'over';
        } else {
          this.isSidebarOpen = true;
          this.drawerMode = 'side';
        }
      });
  }

  onNodeClicked(): void {
    if (this.drawerMode === 'over') {
      this.isSidebarOpen = false;
    }
  }
}
