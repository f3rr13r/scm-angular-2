import { Component, OnInit } from '@angular/core';

// actived route
import { ActivatedRoute } from '@angular/router';

// models
import { Service } from '../models/services-data.interface';

// shared service
import { DataStorageService } from '../data/data.storage';

@Component({
    selector: 'services-detail',
    templateUrl: 'services-detail.component.html',
    styleUrls: [ 'services-detail.component.scss' ]
})

export class ServicesDetailComponent implements OnInit {

    // properties
    serviceName: string;

    service: Service;

    constructor(private _dataStorageService: DataStorageService) { }

    ngOnInit() {
        // make sure we always arrive back at top of page.
        window.scrollTo(0, 0);

        // get data from shared service
        this.service = this._dataStorageService.getService();
    }
}