import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy1',
    pathMatch: 'full',
    loadChildren: 'app/lazy1/lazy1.module#Lazy1Module'
  },
  {
    path: 'lazy2',
    pathMatch: 'full',
    loadChildren: 'app/lazy2/lazy2.module#Lazy2Module'
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
