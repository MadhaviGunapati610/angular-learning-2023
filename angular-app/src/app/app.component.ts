import { Component, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[RouterModule],
  template: `<main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main> `,
  styleUrls: ['./app.component.css'],
  standalone: true,
})
@Injectable({
  providedIn: 'root',
})
export class AppComponent {
  title = 'angular-app';
}
