import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hideLoadingScreen();
    }, 100);
  }

  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      this.renderer.setStyle(loadingScreen, 'display', 'none');
    }
  }
}