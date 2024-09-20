import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  signupUsers: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Retrieve data from localStorage
      const localData = localStorage.getItem('signupUsers');
      if (localData) {
        // Parse the JSON string into an array
        this.signupUsers = JSON.parse(localData);
      }
    } else {
      console.warn('localStorage is not available.');
    }
  }
}
