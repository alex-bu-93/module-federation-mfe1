import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <p>app-root-mfe1</p>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
