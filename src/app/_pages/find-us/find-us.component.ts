import { Component, OnInit, Inject, forwardRef } from '@angular/core';

// shared service
import { DataStorageService } from '../../data/data.storage';

@Component({
    selector: 'find-us',
    templateUrl: 'find-us.component.html',
    styleUrls: [ 'find-us.component.scss' ],
    providers: [ DataStorageService ]
})

export class FindUsComponent implements OnInit {

    offices: any[] = [];

    constructor(private _sharedDataService: DataStorageService){}

ShowBackgroundImage: boolean=false;

    ngOnInit() {
        this.offices = this._sharedDataService.getOfficeLocations();
        console.log(this.offices);
        window.scrollTo(0, 0);
    }

    onResize(event) {
  if(event.target.innerWidth < 827){
      //this.ShowBackgroundImage=true;
      console.log( true );
  }else{
      //this.ShowBackgroundImage=false;
      console.log( false );
  }
}

GetBackgroundImage( i:number ):string {
    if(this.ShowBackgroundImage){
        return this.offices[i].imageUrl;
    } else{
        return "";
    }
}

}