import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { Router } from '@angular/router';
import { SideBarListType } from './sidebar.type';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [MatListModule, MatTreeModule, MatIconModule, MatButtonModule],
})
export class SidebarComponent {
  phhDocument: SideBarListType[] = [
    {
      name: 'PHH Proxy Guide',
      route: '/public/documents/phh-proxy-guide',
      children: [
        {
          name: 'Getting Started',
          route: '/public/documents/phh-proxy-guide/getting-started',
        },
        {
          name: 'User Side',
          route: '/public/documents/phh-proxy-guide/user-side',
        },
        {
          name: 'Admin Side',
          route: '/public/documents/phh-proxy-guide/admin-side',
        },
        {
          name: 'About App',
          route: '/public/documents/phh-proxy-guide/about-app',
        },
        {
          name: 'Admin Guide',
          route: '/public/documents/phh-proxy-guide/admin-guide',
        },
      ],
    },
  ];

  dataSource = this.phhDocument;
  expandedNodes = new Set<SideBarListType>();

  childrenAccessor = (node: SideBarListType) => node.children ?? [];

  hasChild = (_: number, node: SideBarListType) => !!node.children && node.children.length > 0;

  constructor(private router: Router) {}

  onNodeClick(route: string) {
    this.router.navigate([route]);
  }

  // Method to check if a node is expanded
  isExpanded(node: SideBarListType): boolean {
    return this.expandedNodes.has(node);
  }

  // Method to toggle the expanded state of a node
  toggleNode(node: SideBarListType): void {
    if (this.isExpanded(node)) {
      this.expandedNodes.delete(node);
    } else {
      this.expandedNodes.add(node);
    }
  }
}
