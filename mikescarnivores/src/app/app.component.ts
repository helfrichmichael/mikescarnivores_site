import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLinksComponent } from './main-links/main-links.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLinksComponent, HeaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mikescarnivores';
}
