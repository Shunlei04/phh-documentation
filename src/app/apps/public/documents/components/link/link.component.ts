import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LinkComponent {
  @Input() url!: string; // URL or route to navigate to
  @Input() isExternal: boolean = false; // Flag to determine if the link is external
  @Input() target: '_self' | '_blank' | '_parent' | '_top' = '_self'; // Target attribute
  @Input() rel = 'noopener noreferrer'; // Security attributes for external links
  @Input() tooltip?: string; // Tooltip text for the link
  @Input() cssClass?: string; // Custom CSS classes for styling
  @Input() icon?: string; // Optional icon class
}
