import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { ChampionMasteriesResponse } from 'src/app/core/models/champion-masteries-response';
import { LolotService } from 'src/app/core/lolot-service/lolot.service';

@Component({
  selector: 'app-champion-masteries-results',
  templateUrl: './champion-masteries-results.component.html'
})
export class ChampionMasteriesResultsComponent implements OnInit, OnDestroy {
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
