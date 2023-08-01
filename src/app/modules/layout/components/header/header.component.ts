import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Event, Router } from '@angular/router';
import { IMenu } from 'src/app/core/interfaces/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  activatedMenu?: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  menuItems: IMenu[] = [
    {
      name: 'Lista',
      url: '/customer/list',
    },
    {
      name: 'Cadastro',
      url: '/customer/form',
    },
  ];

  setActivatedMenu(): void {
    const itemIndex = this.menuItems.findIndex((item) =>
      window.location.pathname.match(item.url)
    );

    this.menuItems = this.menuItems.map((menu) => ({
      ...menu,
      activated: false,
    }));

    this.activatedMenu = this.menuItems[itemIndex]?.name;
    this.menuItems[itemIndex].activated = true;
  }

  onMenuClick(menu: IMenu): void {
    this.router.navigate([menu.url]);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setActivatedMenu();
      }
    });
  }
}
