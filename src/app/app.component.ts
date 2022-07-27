import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <p>app-root-mfe1</p>
    <a [routerLink]="['lazy']">to lazy (mfr1 internal)</a>
    <hr/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
