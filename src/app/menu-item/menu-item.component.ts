import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input()
  item!: MenuItem;

  addToCart(item: MenuItem): void {
    console.log(`${item.name} added to cart!`);
  }
}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
