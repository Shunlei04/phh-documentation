import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
})
export class ToolbarComponent {
  isDarkMode: boolean = document.body.getAttribute('mode') === 'dark';

  constructor(private sidebarService: SidebarService){}

  toggleMode() {
    const mode = document.body.getAttribute('mode');
    if (mode != 'dark') {
      document.body.setAttribute('mode', 'dark');
      this.isDarkMode = true;
    } else {
      document.body.setAttribute('mode', 'light');
      this.isDarkMode = false;
    }
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
