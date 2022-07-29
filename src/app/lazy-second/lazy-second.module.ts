import { NgModule } from '@angular/core';
import { LazySecondComponent } from './lazy-second.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: LazySecondComponent}])],
  declarations: [LazySecondComponent]
})
export class LazySecondModule {
}
