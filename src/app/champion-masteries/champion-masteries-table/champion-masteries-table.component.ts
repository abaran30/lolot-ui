import { Component, Input } from '@angular/core';

import { ChampionMastery } from 'src/app/core/models/champion-mastery';
import { LolAssetService } from 'src/app/core/lol-asset-service/lol-asset.service';

@Component({
  selector: 'app-champion-masteries-table',
  templateUrl: './champion-masteries-table.component.html',
  styleUrls: ['./champion-masteries-table.component.scss']
})
export class ChampionMasteriesTableComponent {
  @Input() championMasteries: ChampionMastery[];

  constructor(
    private lolAssetService: LolAssetService
  ) { }

  getChampionSquareAssetUrl(championId: string): string {
    return this.lolAssetService.getChampionSquareAssetUrl(championId);
  }

  getChampionMasteryBadgeImgSrc(championMasteryLevel: number): string {
    return `assets/images/champion-mastery-badge-${championMasteryLevel}.png`;
  }
}
