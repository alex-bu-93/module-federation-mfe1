import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path: '', component: LazyComponent},
  {path: 'child', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LazyComponent]
})
export class LazyModule {
}
