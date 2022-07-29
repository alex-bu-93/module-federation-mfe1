import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lazy-second',
  template: '<p>app-lazy-second-mfe1</p>',
})
export class LazySecondComponent {
}
