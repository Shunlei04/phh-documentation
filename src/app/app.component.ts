import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'phh-documentation';
}
