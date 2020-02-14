import { ChampionMastery } from 'src/app/core/models/champion-mastery';
import { Summoner } from 'src/app/core/models/summoner';

export interface ChampionMasteriesResponse {
  summoner: Summoner;
  championMasteries: ChampionMastery[];
}
