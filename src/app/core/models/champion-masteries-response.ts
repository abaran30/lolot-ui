import { ChampionMastery } from '@app/core/models/champion-mastery';
import { Summoner } from '@app/core/models/summoner';

export interface ChampionMasteriesResponse {
  summoner: Summoner;
  championMasteries: ChampionMastery[];
}
