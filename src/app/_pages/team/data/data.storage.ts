import { Injectable } from "@angular/core";

// model
import { TeamMember } from "../models/team-data.interface";

@Injectable()
export class DataStorageService {
  private teamMember: TeamMember = {
    path: null,
    name: null,
    position: null,
    initials: null,
    backgroundImageUrl: null,
    imageUrl: null,
    shortDescription: null,
    fullDescription: null,
    emailAddress: null,
    phoneNumberString: null,
    phoneNumber: null
  };

  setTeamMember(
    urlPath: string,
    name: string,
    position: string,
    initials: string,
    imageUrl: string,
    shortDescription: string,
    fullDescription: string,
    emailAddress: string,
    phoneNumberString: string,
    phoneNumber: number
  ) {
    this.teamMember = {
      path: urlPath,
      name: name,
      position: position,
      initials: initials,
      backgroundImageUrl: "url(" + imageUrl + ")",
      imageUrl: imageUrl,
      shortDescription: shortDescription,
      fullDescription: fullDescription,
      emailAddress: emailAddress,
      phoneNumberString: phoneNumberString,
      phoneNumber: phoneNumber
    };
  }

  getTeamMember() {
    return this.teamMember;
  }
}
