import {NgModule} from '@angular/core';
import {Lazy1Component} from './lazy1.component';
import {Lazy1RoutingModule} from './lazy1-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [Lazy1Component],
  exports: [
    Lazy1RoutingModule
  ]
})
export class Lazy1Module { }
