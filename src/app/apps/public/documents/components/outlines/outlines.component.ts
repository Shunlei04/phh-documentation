import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outlines',
  templateUrl: './outlines.component.html',
  styleUrl: './outlines.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class OutlinesComponent {
  @Input() sections: { id: string; title: string }[] = [];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
