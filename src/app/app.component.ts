import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

declare var JQuery;

@Component({
  selector: 'body',
  templateUrl: '/app.component.html',
  styleUrls: ['/app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    public router: Router
  ) { }

  // apply no-padding class to main when on the homepage
  contentPadding: boolean = true;
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            this.contentPadding = false;
          } else {
            this.contentPadding = true;
          }
        }
      });
  }
}

