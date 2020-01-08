import { Component, Input } from '@angular/core';

import { LolAssetService } from 'src/app/core/lol-asset-service/lol-asset.service';
import { Summoner } from 'src/app/core/models/summoner';

@Component({
  selector: 'app-summoner-info',
  templateUrl: './summoner-info.component.html',
  styleUrls: ['./summoner-info.component.scss']
})
export class SummonerInfoComponent {
  @Input() summoner: Summoner;

  constructor(
    private lolAssetService: LolAssetService
  ) { }

  getSummonerProfileIconUrl() {
    return this.lolAssetService.getSummonerProfileIconUrl(this.summoner.profileIconId);
  }
}
