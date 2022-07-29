import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  styles: [`a { margin-right: 1rem }`],
  template: `
    <p>app-root-mfe1</p>
    <a [routerLink]="['lazy']">to lazy (mfe1 internal)</a>
    <a [routerLink]="['lazy-second']">to lazy-second (mfe1 internal)</a>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
