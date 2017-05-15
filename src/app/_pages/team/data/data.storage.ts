import { Injectable } from "@angular/core";

// model
import { TeamMember } from '../models/team-data.interface';

@Injectable()
export class DataStorageService {

    private teamMember: TeamMember = {
        path: null,
        name: null,
        initials: null,
        imageUrl: null,
        shortDescription: null,
        fullDescription: null,
        emailAddress: null,
        phoneNumber: null
    };

    setTeamMember(urlPath: string, name: string, initials: string, imageUrl: string, shortDescription: string, fullDescription: string, emailAddress: string, phoneNumber: number) {
        this.teamMember = {
            path: urlPath,
            name: name,
            initials: initials,
            imageUrl: 'url(' + imageUrl + ')',
            shortDescription: shortDescription,
            fullDescription: fullDescription,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber
        }
    }

    getTeamMember() {
        return this.teamMember;
    }
}