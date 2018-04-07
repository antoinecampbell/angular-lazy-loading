import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy2',
  template: `
    <p *ngIf="true">
      lazy2 works!
    </p>
  `
})
export class Lazy2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
