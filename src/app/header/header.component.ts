import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router from @angular/router

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  
  constructor(private router: Router) { }

  isLogin() {
    this.router.navigate(['/login'])
  }

}

