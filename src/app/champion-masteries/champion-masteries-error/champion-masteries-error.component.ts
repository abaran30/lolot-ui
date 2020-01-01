import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champion-masteries-error',
  templateUrl: './champion-masteries-error.component.html',
  styleUrls: ['./champion-masteries-error.component.scss']
})
export class ChampionMasteriesErrorComponent implements OnInit {
  errorMessageLine1: string;
  errorMessageLine2: string;
  routeParamsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeParamsSubscription = this.route.queryParams.subscribe(
      queryParams => {
        const errorCode = queryParams.errorCode;
        const summonerName = queryParams.summonerName;

        if (errorCode === '404') {
          this.errorMessageLine1 = `Oops! Looks like summoner ${summonerName} has not been found...`;
          this.errorMessageLine2 = 'Please check the name and region, and try again.';
        } else {
          this.errorMessageLine1 = `Oops! Looks like there has been a server error... `;
          this.errorMessageLine2 = 'Please try again later.';
        }
      }
    );
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
