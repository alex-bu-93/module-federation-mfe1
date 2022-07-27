import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lazy',
  template: `<p>app-lazy-mfe1</p>`
})
export class LazyComponent {
}
