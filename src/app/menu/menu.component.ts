import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [MenuItemComponent, CommonModule ]
})
export class MenuComponent {
  categories: string[] = ['Coffee', 'Tea', 'Pastries'];
  selectedCategoryItems: MenuItem[] = [];
  allMenuItems: MenuItem[] = [
      { name: 'Cappuccino', description: 'Espresso with steamed milk foam', price: 3.99, image: 'cappuccino.jpg', category: 'Coffee' },
      { name: 'Green Tea', description: 'Japanese green tea', price: 2.49, image: 'green_tea.jpg', category: 'Tea' },
      { name: 'Blueberry Muffin', description: 'Freshly baked muffin with blueberries', price: 2.99, image: 'blueberry_muffin.jpg', category: 'Pastries' },
      // Add more menu items below
      { name: 'Latte', description: 'Espresso with steamed milk', price: 4.49, image: 'latte.jpg', category: 'Coffee' },
      { name: 'Chai Tea', description: 'Spiced tea with milk', price: 3.29, image: 'chai_tea.jpg', category: 'Tea' },
      { name: 'Chocolate Croissant', description: 'Buttery croissant with chocolate filling', price: 3.49, image: 'chocolate_croissant.jpg', category: 'Pastries' },
      // Add more items as needed
  ];

  constructor() { }

  selectCategory(category: string): void {
      this.selectedCategoryItems = this.allMenuItems.filter(item => item.category === category);
  }
}

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}