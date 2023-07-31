import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IMenu } from 'src/app/core/interfaces/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  menuItems: IMenu[] = [
    {
      name: 'Lista',
      url: '/',
    },
    {
      name: 'Cadastro',
      url: '/',
    },
  ];


  getFullPath(): Observable<string> {
    return this.activatedRoute.url.pipe(
      map((segments) =>
        segments.reduce((prev, curr, i) => prev.concat('/' + curr.path), '')
      )
    );
  }

  ngOnInit(): void {
    this.getFullPath();
  }
}
