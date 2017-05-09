import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'find-us',
    templateUrl: 'find-us.component.html',
    styleUrls: [ 'find-us.component.scss' ]
})

export class FindUsComponent implements OnInit {

    // make sure we start at top of page.
    // Going forward we will check which
    // office they clicked on and scroll down
    // or up automatically to that office.
    ngOnInit() {
        window.scrollTo(0, 0);
    }

}