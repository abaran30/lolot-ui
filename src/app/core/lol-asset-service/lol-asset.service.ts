import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class LolAssetService {
  getChampionSquareAssetUrl(championId): string {
    return `${environment.lolDDragonBaseUrlWithPatch}/img/champion/${championId}.png`;
  }

  getSummonerProfileIconUrl(profileIconId: number) {
    return `${environment.lolDDragonBaseUrlWithPatch}/img/profileicon/${profileIconId}.png`;
  }
}
