import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { Router } from '@angular/router';
import { DrawerService } from '../../services/drawer/drawer.service';
import { SideBarListType } from './sidebar.type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: { class: 'app-host' },
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTreeModule],
})
export class SidebarComponent {
  @Output() nodeClicked = new EventEmitter<void>();

  currentComponent: any;

  phhDocument: SideBarListType[] = [
    {
      name: 'DM Dashboard',
      route: 'app/dm-dashboard',
      children: [
        {
          name: 'Getting Started',
          route: '',
        },
        {
          name: 'User Side',
          route: 'public/documents/phh-proxy-guide/user-side',
        },
      ],
    },
    {
      name: 'PHH Proxy Guide',
      route: 'app/phh-proxy-guide',
      children: [
        {
          name: 'Getting Started',
          route: 'app/phh-proxy-guide/get-started',
        },
        {
          name: 'User Side',
          route: 'public/documents/phh-proxy-guide/user-side',
        },
      ],
    },
  ];

  dataSource = this.phhDocument;
  expandedNodes = new Set<SideBarListType>();

  childrenAccessor = (node: SideBarListType) => node.children ?? [];

  hasChild = (_: number, node: SideBarListType) =>
    !!node.children && node.children.length > 0;

  constructor(private drawerService: DrawerService, private router: Router) {}

  onNodeClick(node: any) {
    this.router.navigate([node.route]);
    this.nodeClicked.emit();
  }

  // Check if a node is expanded
  isExpanded(node: SideBarListType): boolean {
    return this.expandedNodes.has(node);
  }

  // Toggle expanded state of a node
  toggleNode(node: SideBarListType): void {
    if (this.isExpanded(node)) {
      this.expandedNodes.delete(node);
    } else {
      this.expandedNodes.add(node);
    }
  }
}
