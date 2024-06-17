import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home', // Ajoutez le routerLink si vous avez une route définie pour l'accueil
      },
      {
        label: 'MoodWall',
        icon: 'pi pi-face-smile',
        routerLink: '/mood', // Ajoutez le routerLink si vous avez une route définie pour le mood
      },
    ];
  }
}
