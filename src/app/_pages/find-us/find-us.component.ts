import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// shared service
import { DataStorageService } from '../../data/data.storage';

@Component({
  selector: 'scm-find-us',
  templateUrl: 'find-us.component.html',
  styleUrls: ['find-us.component.scss'],
  providers: [DataStorageService]
})
export class FindUsComponent implements OnInit {
  offices: any[] = [];
  canShowBackgroundImage: boolean;

  constructor(private _sharedDataService: DataStorageService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // check width for styles
    this.checkInitialScreenWidth();

    // get the data
    this.offices = this._sharedDataService.getOfficeLocations();

    // start by showing correct office on screen centre.
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      if (params['location'] === 'bridgend') {
        window.scrollTo(0, 0);
      } else if (params['location'] === 'swansea') {
        window.scrollTo(0, 480);
      } else if (params['location'] === 'cardiff') {
        window.scrollTo(0, 960);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }

  checkInitialScreenWidth() {
    if (window.innerWidth < 829) {
      this.canShowBackgroundImage = true;
    } else {
      this.canShowBackgroundImage = false;
    }
  }

  onResize(event) {
    if (event.target.innerWidth < 827) {
      this.canShowBackgroundImage = true;
    } else {
      this.canShowBackgroundImage = false;
    }
  }
}
