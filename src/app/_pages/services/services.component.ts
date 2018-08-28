import { Component, OnInit } from "@angular/core";

// routing
import { Router } from "@angular/router";

// data model
import { Service } from "./models/services-data.interface";

// shared service
import { DataStorageService } from "./data/data.storage";

@Component({
  selector: "services",
  templateUrl: "services.component.html",
  styleUrls: ["services.component.scss"]
})
export class ServicesComponent implements OnInit {
  constructor(
    private _router: Router,
    private _dataStorageService: DataStorageService
  ) {}

  services: Service[];
  selectedRow: number;

  // make sure we always arrive back at top of page.
  ngOnInit() {
    window.scrollTo(0, 0);

    this.services = [
      {
        path: "violent-crime-offences",
        title: "Violent Crime Offences",
        description:
          "Violent crime offences range from a minor punch (common assault, a punch which leaves a minor cut or a bruise (Actual Bodily Harm), a serious injury casued by recklessness (Section 20 Grevious Bodily Harm), or a serious injury caused intentionally to seriously harm another person (Section 8 Grevious Bodily Harm). <br><br>Whatever type of allegation is made against you, our Serious Crime Solicitors have the knowledge and expertise to defend you.We will scrutinise the evidence and chase witnesses or CCTV evidence if it is available.Furthermore, our Lawyers' creative minds will be working with you to find evidence or arguments which will increase your chances of an acquittal.",
        imageUrl: 'url("/assets/services/violent-crime.jpg")',
        crimes: [
          "Murder",
          "Section 18 grievous bodily harm with intent",
          "Section 20 grievous bodily harm",
          "Actual body harm",
          "Common Assault"
        ]
      },
      {
        path: "sexual-crime-offences",
        title: "Sexual Crime Offences",
        description:
          "SCM's specialist sexual offence solicitors understand that an allegation of a sexual nature can be emotionally stressful and take its toll on those around you. We understand the need for you and your family to be advised and informed on how court proceedings work and that such procedures may be unfamiliar to you.<br><br>Often these offences are based purely on the issue of consent and presenting accurate and factual legal arguments to support this is key.<br><br>Below are some, but not all, offences that we cover here at SCM.",
        imageUrl: 'url("/assets/services/sexual-offences.jpg")',
        crimes: [
          "Rape",
          "Sexual Assault",
          "Sexual Offences against children",
          "Possessing indecent images of children",
          "Child grooming",
          "Exposure / Voyerism"
        ]
      },
      {
        path: "drugs-offences",
        title: "Drugs Offences",
        description:
          "SCM Solicitors have defended those accused of importing, producing, distributing, supplying and possessing all classes of drugs for more than 30 years. Either you are uncontrollably addicted to the use of drugs, helpless due to the very real and painful physical effects of long term use; or you are engrossed in a vicious lifestyle cycle.<br><br>Wherever you fit, the Serious Crime Solicitors at this firm will be able to assist you in the preparation of your case at every step of the way. Below is a list of just some of the alleged offences that we can assist you with.",
        imageUrl: 'url("/assets/services/drugs-offences.jpg")',
        crimes: [
          "Conspiracy to supply",
          "Possession with intent to supply",
          "Production of controlled drugs",
          "Permitting premises to be used",
          "Possessing controlled drugs"
        ]
      },
      {
        path: "fraud-offences",
        title: "Fraud Offences",
        description:
          "Whether you are a business or an individual, SCM will create a tailored strategy to meet your end-goals. Having handled cases a multitude of cases, we have the experience of dealing with a spectrum of offences under this legislation.<br><br>We are renowned for our commitment to taking early action in any investigation and advising on preventative steps which may be taken to resolve the case without the need for formal court proceedings.We will be responsible for pursuing all possible lines of enquiry which could yield that vital grain of evidence to prove your innocence or sway the jury in your favour.<br><br>We have excellent relationships with truly gifted Barristers and QCs who we will engage to support your team.We have access to forensic experts, to accountants, to mobile phone analysis experts who can all be called in to give evidence to bolster your defence.",
        imageUrl: 'url("/assets/services/fraud-offences.jpg")',
        crimes: [
          "Conspiracy to defraud",
          "False representation",
          "Bribery",
          "Money Laundering",
          "TAX / Benefit fraud"
        ]
      },
      {
        path: "theft-and-dishonesty-offences",
        title: "Theft & Dishonesty Offences",
        description:
          "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
        imageUrl: 'url("/assets/services/theft-offences.jpg")',
        crimes: [
          "Burglary",
          "Shoplifting",
          "Theft from employer",
          "Handling stolen goods",
          "Making off without payment"
        ]
      },
      {
        path: "cyber-offences",
        title: "Cyber Offences",
        description:
          "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
        imageUrl: 'url("/assets/services/cyber-offences.jpg")',
        crimes: [
          "Child pornography",
          "Espionage",
          "Copyright Infringement",
          "Financial Theft"
        ]
      },
      {
        path: "regulatory-offences",
        title: "Regulatory Offences",
        description:
          "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
        imageUrl: 'url("/assets/services/regulatory-offences.jpg")',
        crimes: [
          "Health and safety offences",
          "Food hygiene offences",
          "Trading Standards offences",
          "Licensing offences",
          "Environment offences"
        ]
      },
      {
        path: "motoring-offences",
        title: "Motoring Offences",
        description:
          "Mumblecore master cleanse semiotics, hammock bicycle rights polaroid fanny pack pitchfork pok pok leggings health goth yr. Affogato ethical tofu franzen. Cray skateboard semiotics artisan, swag polaroid air plant gentrify pinterest kale chips marfa kombucha slow-carb jean shorts wayfarers.",
        imageUrl: 'url("/assets/services/motoring-offences.jpg")',
        crimes: [
          "Dangerous and careless driving",
          "Driving while under the influence of drink/drugs",
          "Speeding",
          "Driving without a license",
          "Driving without insurance",
          "Driving whilst disqualified"
        ]
      }
    ];
  }

  showLayer(value: number) {
    this.selectedRow = value;
  }

  hideLayer(value: number) {
    // do something
  }

  goToServicesDetail(
    _path: string,
    _title: string,
    _description: string,
    _imageUrl: string,
    _crimes: string[]
  ) {
    // pass data to shared storage
    this._dataStorageService.setService(
      _path,
      _title,
      _description,
      _imageUrl,
      _crimes
    );

    // navigate to services detail.
    this._router.navigate(["/services", _path]);
  }

  goToNotableCases() {
    this._router.navigateByUrl("/notable-cases");
  }
}
