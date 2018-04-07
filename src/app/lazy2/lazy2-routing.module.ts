import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Lazy2Component} from './lazy2.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: Lazy2Component
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Lazy2RoutingModule {

}
