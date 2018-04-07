import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/lazy1">Lazy 1</a></li>
        <li><a routerLink="/lazy2">Lazy 2</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
