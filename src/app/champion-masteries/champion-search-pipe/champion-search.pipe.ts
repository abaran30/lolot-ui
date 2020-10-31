import { Pipe, PipeTransform } from '@angular/core';

import { ChampionMastery } from '@app/core/models/champion-mastery';

@Pipe({
  name: 'championSearch'
})
export class ChampionSearchPipe implements PipeTransform {
  transform(championMasteries: ChampionMastery[], championSearchText: string): ChampionMastery[] {
    if (championSearchText) {
      return championMasteries.filter(
        championMastery => championMastery.championName.toLowerCase().includes(championSearchText.toLowerCase())
      );
    }

    return championMasteries;
  }
}
