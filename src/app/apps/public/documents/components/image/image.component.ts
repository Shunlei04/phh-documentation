import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ImageComponent {
  @Input() src!: string;
  @Input() alt = '';
  @Input() caption?: string;
}
