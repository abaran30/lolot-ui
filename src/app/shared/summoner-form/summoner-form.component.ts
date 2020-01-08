import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

import { ChampionMasteriesRequest } from 'src/app/core/models/champion-masteries-request';

@Component({
  selector: 'app-summoner-form',
  templateUrl: './summoner-form.component.html',
  styleUrls: ['./summoner-form.component.scss']
})
export class SummonerFormComponent {
  formModel = new ChampionMasteriesRequest(
    this.route.snapshot.queryParams.summonerName ? this.route.snapshot.queryParams.summonerName : '',
    this.route.snapshot.queryParams.summonerRegion ? this.route.snapshot.queryParams.summonerRegion : 'NA');
  regions = [ // TODO: Support other regions
    'NA',
    'EUNE',
    'EUW'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    const navigationExtras: NavigationExtras = {
      queryParams: { ...this.formModel }
    };

    this.router.navigate(['/champion-masteries'], navigationExtras);
  }
}
