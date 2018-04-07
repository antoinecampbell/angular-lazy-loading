import {NgModule} from '@angular/core';
import {Lazy2Component} from './lazy2.component';
import {Lazy2RoutingModule} from './lazy2-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [Lazy2Component],
  exports: [
    Lazy2RoutingModule
  ]
})
export class Lazy2Module {
}
