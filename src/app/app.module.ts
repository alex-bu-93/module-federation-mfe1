import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'lazy', loadChildren: () => import('./lazy').then(m => m.LazyModule)},
      {path: 'lazy-second', loadChildren: () => import('./lazy-second').then(m => m.LazySecondModule)}
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
