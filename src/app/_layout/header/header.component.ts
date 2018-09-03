import { Component, OnInit } from "@angular/core";

// routing
import { Router } from "@angular/router";

// components
import { HeaderContactComponent } from "./header-contact/header-contact.component";

@Component({
  selector: "header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isHomeSelected: boolean;
  isServicesSelected: boolean;
  isTeamSelected: boolean;
  isFindUsSelected: boolean;

  constructor(private _router: Router) {}

  ngOnInit() {
    // show home page by default.
    this.navigateToHome();
  }

  // routing
  navigateToHome() {
    this._router.navigateByUrl("/");
  }

  navigateToServices() {
    this._router.navigateByUrl("services");
  }

  navigateToTeam() {
    this._router.navigateByUrl("team");
  }

  navigateToFindUs() {
    this._router.navigateByUrl("find-us");
  }
}
