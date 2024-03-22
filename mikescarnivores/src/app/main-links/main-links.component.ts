import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

declare interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-main-links',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './main-links.component.html',
  styleUrl: './main-links.component.scss'
})
export class MainLinksComponent {
  links: Link[] = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/mikescarnivores'
    },
    {
      name: 'Shop (Order Plants)',
      url: 'https://shop.mikescarnivores.com/',
    },
    {
      name: '3D Prints for Sale',
      url: 'https://mikescarnivores.com/3d',
    },
    {
      name: 'Buy me a Coffee',
      url: 'https://www.buymeacoffee.com/helfrichmichael',
    }
  ];
}
