import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  items: MenuItem[] = [];
  checked: boolean = false; // Variable pour l'état du switch

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
  }

  onSwitchChange(event: any) {
    console.log('Switch state changed:', event.checked);
    // Ajoutez votre logique ici pour gérer le changement de l'état du switch
  }
}
