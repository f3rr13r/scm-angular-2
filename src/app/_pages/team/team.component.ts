import { Component, OnInit } from '@angular/core';

// routing
import { Router } from '@angular/router';

// models
import { TeamMember } from './models/team-data.interface';

// service
import { DataStorageService } from './data/data.storage';

@Component({
  selector: 'team',
  templateUrl: 'team.component.html',
  styleUrls: ['team.component.scss']
})
export class TeamComponent implements OnInit {
  partner: TeamMember[];
  associates: TeamMember[];
  duty: TeamMember[];
  admin: TeamMember[];
  isOnTeamHover: boolean;
  selectedItem: number;

  constructor(private _router: Router, private _dataStorageService: DataStorageService) {}

  ngOnInit() {
    // make sure we always arrive back at top of page.
    window.scrollTo(0, 0);

    // default to dai's profile on arrival.
    this.selectedItem = 0;

    // team data
    this.partner = [
      {
        path: 'david-sedgewick',
        name: 'David Sedgwick',
        position: 'Bridgend Office',
        initials: 'DS',
        backgroundImageUrl: '/assets/team/scm-placeholder.png',
        imageUrl: '/assets/team/scm-placeholder.png',
        shortDescription:
          'David is a Senior Criminal Practitioner, having dealt with Criminal cases since the early 80’s. An extremely experienced advocate, he has conducted countless hearings in both the Magistrates and Crown Court. David has acted as an Advocate in cases from Drunk and Disorderly to Murder.',
        fullDescription:
          'David is a Senior Criminal Practitioner, having dealt with Criminal cases since the early 80’s. An extremely experienced advocate, he has conducted countless hearings in both the Magistrates and Crown Court. David has acted as an Advocate in cases from Drunk and Disorderly to Murder. He has attended the police station since the 80’s, and has been a Duty Solicitor for 30 years. Founder and Director of the original firm which joined with Chudleighs Solicitors to form SCM Law. David has been involved in dealing with some of the biggest Drug Conspiracy cases in Wales over the last 25 years, together with large scale frauds and all other serious cases for example Murder or Serios Sexual Offences',
        emailAddress: 'david@scmlaw.co.uk',
        phoneNumberString: '07768736502',
        phoneNumber: +447768736502
      },
      {
        path: 'rhodri-chudleigh',
        name: 'Rhodri Chudleigh',
        position: 'Head of Cardiff Office',
        initials: 'RC',
        backgroundImageUrl: '/assets/team/rhod-profile.jpg',
        imageUrl: '/assets/team/rhod-profile.jpg',
        shortDescription:
          'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.',
        fullDescription:
          'Rhodri was the founding partner of Chudleigh solicitors before the practice merged in 2015 to become SCM Solicitors.  He has been practicing as a criminal solicitor for over 15 years, and has extensive experience in defending complex criminal cases including murder, serious violence, large scale drug conspiracies, serious sexual offences, fraud, money laundering and firearm offences. Rhodri is an experienced advocate whose practice is predominantly based in the Crown Court.  He has also successfully appeared before the Court of Appeal Criminal Division.  Rhodri has past experience of working in specialised Fraud Firm in Birmingham representing defendants prosecuted by the Serious fraud Office and H M Revenue and Customs.',
        emailAddress: 'rhodri@scmlaw.co.uk',
        phoneNumberString: '07554886380',
        phoneNumber: +447554886380
      },
      {
        path: 'robert-chudleigh',
        name: 'Robert Chudleigh',
        position: 'Bridgend Office',
        initials: 'RC',
        backgroundImageUrl: '/assets/team/rob-profile.jpg',
        imageUrl: '/assets/team/rob-profile.jpg',
        shortDescription:
          'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court.',
        fullDescription:
          'Robert is a specialist criminal defence lawyer experienced in representing individuals charged with the most serious of crimes including murder and manslaughter. His practice encompasses the representation of individuals following arrest at the police station through to the Magistrates’ Court and the Crown Court. Robert is a duty Solicitor and a Solicitor Advocate. He has experience of conducting Crown Court trials on behalf of defendants charged with such offences as robbery, burglary, theft and drug supply offences. Robert is a fluent Welsh speaker and is able to represent defendants in either English or Welsh. He is regarded as a highly approachable and skilled lawyer.',
        emailAddress: 'robert@scmlaw.co.uk',
        phoneNumberString: '07900560941',
        phoneNumber: +447900560941
      },
      {
        path: 'james-mckenna',
        name: 'James McKenna',
        position: 'Head of Swansea Office',
        initials: 'JM',
        backgroundImageUrl: '/assets/team/james-profile.jpg',
        imageUrl: '/assets/team/james-profile.jpg',
        shortDescription:
          'James is a Solicitor Advocate and heads SCM Solicitors Swansea office. James is a duty solicitor and deals with a variety of cases in the police station, Magistrates Court and Crown Court on a day to day basis.',
        fullDescription:
          'James is a Solicitor Advocate and heads SCM Solicitors Swansea office. James is a duty solicitor and deals with a variety of cases in the police station, Magistrates Court and Crown Court on a day to day basis. James has expertly prepared and successfully defended clients facing a full array of criminal charges including those who are charged with the most serious allegations including murder, armed robberies, fraud, drug trafficking and sexual offences.  ',
        emailAddress: 'james@scmlaw.co.uk',
        phoneNumberString: '07738703699',
        phoneNumber: +447738703699
      }
    ];

    this.associates = [
      {
        path: 'lucas-edwards',
        name: 'Lucas Edwards',
        position: null,
        initials: 'LE',
        backgroundImageUrl: '/assets/team/lucas-profile.jpg',
        imageUrl: '/assets/team/lucas-profile.jpg',
        shortDescription:
          'Lucas is a Qualified Higher Court Advocate and Duty Solicitor who specialises in all areas of Criminal Law. Before joining SCM, Lucas worked as an Assistant Solicitor for Lloyd and Rowe Solicitors in Cardiff and thereafter for JA Hughes in Barry.Lucas was later made a Partner at JA Hughes, where he took charge of their Criminal Department.',
        fullDescription:
          'Lucas is a Qualified Higher Court Advocate and Duty Solicitor who specialises in all areas of Criminal Law. Before joining SCM, Lucas worked as an Assistant Solicitor for Lloyd and Rowe Solicitors in Cardiff and thereafter for JA Hughes in Barry. Lucas was later made a Partner at JA Hughes, where he took charge of their Criminal Department. Lucas represents clients at the Police Station, Youth Court, Magistrates Court and Crown Court. Lucas has represented clients for a wide range of offences such as Rape, Terrorism and Murder.',
        emailAddress: 'lucas@scmlaw.co.uk',
        phoneNumberString: '07813568339',
        phoneNumber: +447813568339
      }
    ];

    this.duty = [
      {
        path: 'philip-thomas',
        name: 'Philip Thomas',
        position: null,
        initials: 'PT',
        backgroundImageUrl: '/assets/team/phil-profile.jpg',
        imageUrl: '/assets/team/phil-profile.jpg',
        shortDescription:
          'Philip Thomas, a Specialist Qualified Criminal Lawyer, joined SCM as a Consultant Solicitor at it’s inception in 2016. Before moving to work at SCM, he had many years experience, formerly a Senior Partner and Consultant with Gwyn & Gwyn/Larby Williams (now JCP Solicitors), and also the Sole Principle of Philip Thomas & Co, a criminal law firm in Bridgend.',
        fullDescription:
          'Philip Thomas, a Specialist Qualified Criminal Lawyer, joined SCM as a Consultant Solicitor at it’s inception in 2016. Before moving to work at SCM, he had many years experience, formerly a Senior Partner and Consultant with Gwyn & Gwyn/Larby Williams (now JCP Solicitors), and also the Sole Principle of Philip Thomas & Co, a criminal law firm in Bridgend. He has also been a Chairman and Member of local and regional Duty Solicitor Committees. Outside of work, Phil is married, and has three daughters.',
        emailAddress: 'phil@scmlaw.co.uk',
        phoneNumberString: '07976720367',
        phoneNumber: +447976720367
      },
      {
        path: 'richard-adamec',
        name: 'Richard Adamec',
        position: null,
        initials: 'DM',
        backgroundImageUrl: '/assets/team/adamec-profile.jpg',
        imageUrl: '/assets/team/adamec-profile.jpg',
        shortDescription:
          'Grays Inn Barrister, called 1988. Magistrates legal adviser until 2012 specialising in family and criminal law. Vice chairman Vale Cricket Club.',
        fullDescription:
          'Grays Inn Barrister, called 1988. Magistrates legal adviser until 2012 specialising in family and criminal law. Vice chairman Vale Cricket Club.',
        emailAddress: 'richard@scmlaw.co.uk',
        phoneNumberString: '07912747112',
        phoneNumber: +447912747112
      }
    ];

    this.admin = [
      {
        path: '',
        name: 'Jackie James',
        position: 'Bridgend Office',
        initials: 'JA',
        backgroundImageUrl: '/assets/team/jackie-profile.jpg',
        imageUrl: '/assets/team/jackie-profile.jpg',
        shortDescription: '',
        fullDescription: '',
        emailAddress: 'jackie@scmlaw.co.uk',
        phoneNumberString: '',
        phoneNumber: 0
      },
      {
        path: '',
        name: 'Mary Bourke',
        position: 'Bridgend Office',
        initials: 'MA',
        backgroundImageUrl: '/assets/team/mary-profile.jpg',
        imageUrl: '/assets/team/mary-profile.jpg',
        shortDescription: '',
        fullDescription: '',
        emailAddress: 'mary@scmlaw.co.uk',
        phoneNumberString: '',
        phoneNumber: 0
      },
      {
        path: '',
        name: 'Deborah Thomas',
        position: 'Cardiff Office',
        initials: 'DA',
        backgroundImageUrl: '/assets/team/deb-profile.jpg',
        imageUrl: '/assets/team/deb-profile.jpg',
        shortDescription: '',
        fullDescription: '',
        emailAddress: 'deb@scmlaw.co.uk',
        phoneNumberString: '',
        phoneNumber: 0
      }
    ];
  }

  onTeamHover() {
    this.isOnTeamHover = true;
  }

  offTeamHover() {
    this.isOnTeamHover = false;
  }

  itemHover(value: number) {
    this.selectedItem = value;
  }

  goToTeamDetail(
    _urlPath: string,
    _name: string,
    _position: string,
    _initials: string,
    _imageUrl: string,
    _shortDescription: string,
    _fullDescription: string,
    _emailAddress: string,
    _phoneNumberString: string,
    _phoneNumber: number
  ) {
    // navigate to team detail.
    this._router.navigate(['/team', _urlPath]);

    // pass data to shared storage
    this._dataStorageService.setTeamMember(
      _urlPath,
      _name,
      _position,
      _initials,
      _imageUrl,
      _shortDescription,
      _fullDescription,
      _emailAddress,
      _phoneNumberString,
      _phoneNumber
    );
  }

  openEmail(email: string) {
    window.location.href = `mailTo:${email}`;
  }
}
