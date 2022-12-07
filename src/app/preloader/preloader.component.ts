import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  animations: [
    trigger(
      'fadeOut', [
        state('in', style({opacity: 0, display: 'none'})),
        transition(':enter',
          animate('1s 500ms ease-in-out'))
        ])
  ]
})
export class PreloaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
