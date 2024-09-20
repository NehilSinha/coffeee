import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from "./loading/loading.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, HomeComponent, MenuComponent, FormsModule, HeaderComponent, LoadingComponent]
})
export class AppComponent {
  title = 'Caffeine';
}
