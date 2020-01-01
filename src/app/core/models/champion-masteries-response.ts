import { ChampionMastery } from './champion-mastery';
import { Summoner } from './summoner';

export interface ChampionMasteriesResponse {
  summoner: Summoner,
  championMasteries: ChampionMastery[]
}
