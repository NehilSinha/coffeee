import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  email: string = "nehil";
  password: string = "nehil";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin']);
    // } else {
    //   alert('Invalid email or password');
    // }
  }
}

