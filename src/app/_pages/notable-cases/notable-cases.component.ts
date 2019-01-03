import { Component } from '@angular/core';

interface NotableCase {
  title;
  subtitle;
  description;
  court;
}

@Component({
  selector: 'notable-cases',
  templateUrl: 'notable-cases.component.html',
  styleUrls: ['notable-cases.component.scss']
})
export class NotableCasesComponent {
  notableCases: [NotableCase] = [
    {
      title: 'R v B & OTHERS (2019)',
      subtitle: 'OPERATION RED DRAGON',
      description: 'Represented all 5 defendants in a conspiracy to supply half a million pounds of heroin',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v A (2018)',
      subtitle: 'OPERATION BLUE KRCH',
      description: 'Widespread distribution of class A,B & C drugs with over 90,000 pages of served evidence',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v A & OTHERS (2018)',
      subtitle: 'OPERATION JACKDAW',
      description: 'Represented one of 8 defendants in a conspiracy to supply up to 10 kilos of heroin',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v M & others (2018)',
      subtitle: 'OPERATION CAVE',
      description: '10 defendant conspiracy to supply multiple kilos of class A drugs',
      court: 'Bristol Crown Court'
    },
    {
      title: 'R v Vu & others (2018)',
      subtitle: 'OPERATION VIOLET PANAMA',
      description:
        '22 defendant conspiracy to supply industrial quantities of cannabis with over 90,000 pages of evidence',
      court: 'Merthyr Tydfil Crown Court'
    },
    {
      title: 'R v G & P & others (2018)',
      subtitle: 'OPERATION REDWOOD',
      description:
        'Conspiracy to contravene provisions of the Trade Marks Act – Widespread distribution of unauthorised vinyl records over 100, 000 pages of evidence.',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v T & others (2017)',
      subtitle: 'OPERATION RED ALASKA',
      description: 'Multi handed life insurance fraud',
      court: 'Swansea Crown Court'
    },
    {
      title: 'R v T, P, G & others (2017)',
      subtitle: 'OPERATION BLUE MAGNET',
      description:
        'Represented x3 defendants in a multi handed conspiracy to supply multiple kilos of Heroin and cocaine',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v J & others (2017)',
      subtitle: 'OPERATION VIOLET ANVIL',
      description: 'Conspiracy to supply multiple kilos of cocaine and cannabis',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R V G & others (2017)',
      subtitle: 'OPERATION DINO II',
      description: 'Follow up to Operation DINO involving a further 80 defendants in a crash for cash Insurance scam',
      court: 'Newport Crown Court'
    },
    {
      title: 'R v H (2017)',
      subtitle: 'OPERATION BLUE CAPRI',
      description: 'Multiple rapes of children',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R V K & others (2016)',
      subtitle: 'OPERATION ORANGE GOBI',
      description: 'Multiple defendant conspiracy to supply cocaine and possessing a sawn-off shotgun',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v T, C , S & others (2016',
      subtitle: 'OPERATION HALLET',
      description: 'Represented x3 defendants in a multi handed conspiracy to supply cocaine',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v J & others (2016)',
      subtitle: '',
      description: 'Large scale 18 defendant conspiracy to produce large quantities of cannabis and money laundering',
      court: 'Merthyr Tydfil Crown Court'
    },
    {
      title: 'R v H & others (2016)',
      subtitle: 'OPERATION ASTORIA',
      description: 'People trafficking, large scale cannabis production',
      court: 'Bristol Crown Court'
    },
    {
      title: 'R v S (2016)',
      subtitle: '',
      description: 'Murder',
      court: 'Cardiff Crown Court'
    },
    {
      title: 'R v S (2016)',
      subtitle: '',
      description: 'Murder trial and retrial',
      court: 'Swansea Crown Court'
    },
    {
      title: 'R v A (2014)',
      subtitle: 'OPERATION DINO',
      description:
        'Britain’s biggest crash for cash insurance scam involving in excess of 80 defendants. Conspiring to defraud the insurance industry of in excess of £763,000',
      court: 'Newport Crown Court'
    },
    {
      title: 'R v S (2014)',
      subtitle: '',
      description: 'Murder trial',
      court: 'Swansea Crown Court'
    },
    {
      title: 'R v S & Others (2014)',
      subtitle: 'OPERATION BUGS',
      description: 'Large scale 19 defendant £500,000 trading standards fraud',
      court: 'Swansea Crown Court'
    },
    {
      title: 'R v G & Others (2013)',
      subtitle: 'OPERATION WHITE HORSE',
      description: 'Multiple defendant money laundering £700,000',
      court: 'Bristol Crown Court'
    },
    {
      title: 'R v V & others (2011)',
      subtitle: 'OPERATION REGINA',
      description: 'Conspiracy to supply multiple kilos of cannabis',
      court: 'Bristol Crown Court'
    }
  ];
}
