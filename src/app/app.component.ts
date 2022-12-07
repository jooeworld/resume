import {Component, OnInit} from '@angular/core';

// Use JQuery loaded with sticky sidebar from angular.json
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // This trigger sticky bars
    $('.left-col-block, .right-col-block').theiaStickySidebar();
  }

}
