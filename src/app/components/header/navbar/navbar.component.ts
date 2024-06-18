import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  checked: boolean = false; // Variable pour l'état du switch

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'MoodWall',
        icon: 'pi pi-face-smile',
        routerLink: '/mood',
      },
    ];

    // Vérifiez le mode initial et appliquez-le
    const initialMode = localStorage.getItem('theme') || 'dark';
    this.checked = initialMode === 'light';
    console.log('Initial mode:', initialMode);
    this.setTheme(this.checked);
  }

  onSwitchChange(event: any) {
    console.log('Switch state changed:', event.checked);
    this.setTheme(event.checked);
  }

  setTheme(isDarkMode: boolean) {
    console.log('Setting theme to:', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      this.renderer.removeClass(document.body, 'light-mode');
      this.renderer.addClass(document.body, 'dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
      this.renderer.addClass(document.body, 'light-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
