import { Component, Input, OnInit } from '@angular/core';

import { ChampionMastery } from 'src/app/core/models/champion-mastery';

@Component({
  selector: 'app-champion-masteries-summary',
  templateUrl: './champion-masteries-summary.component.html',
  styleUrls: ['./champion-masteries-summary.component.scss']
})
export class ChampionMasteriesSummaryComponent implements OnInit {
  @Input() championMasteries: ChampionMastery[];

  numberOfChestsAcquired = 0;
  numberOfLevel7Masteries = 0;
  numberOfLevel6Masteries = 0;
  numberOfLevel5Masteries = 0;

  ngOnInit() {
    this.championMasteries.forEach(
      championMastery => {
        if (championMastery.chestGranted) {
          this.numberOfChestsAcquired++;
        }

        if (championMastery.championLevel === 7) {
          this.numberOfLevel7Masteries++;
        }

        if (championMastery.championLevel === 6) {
          this.numberOfLevel6Masteries++;
        }

        if (championMastery.championLevel === 5) {
          this.numberOfLevel5Masteries++;
        }
      }
    );
  }
}
