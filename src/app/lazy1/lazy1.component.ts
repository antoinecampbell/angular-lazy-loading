import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy2',
  template: `
    <p *ngIf="true">
      lazy1 works!
    </p>
  `
})
export class Lazy1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
