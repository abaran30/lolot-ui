import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { ChampionMasteriesResponse } from '../../core/models/champion-masteries-response';
import { LolotService } from '../../core/lolot-service/lolot.service';

@Component({
  selector: 'app-champion-masteries-results',
  templateUrl: './champion-masteries-results.component.html',
  styleUrls: ['./champion-masteries-results.component.scss']
})
export class ChampionMasteriesResultsComponent implements OnInit {
  championMasteriesResponse$: Observable<ChampionMasteriesResponse>;
  routeParamsSubscription: Subscription;

  constructor(
    private lolotService: LolotService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.queryParams.subscribe(
      queryParams => {
        const summonerName = queryParams.summonerName;
        const summonerRegion = queryParams.summonerRegion;

        this.championMasteriesResponse$ = this.lolotService.getChampionMasteriesForSummoner(summonerName, summonerRegion);
      }
    );
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
