export interface ChampionMastery {
  championId: string;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  tokensEarned: number;
  championName: string;
  championSquareAssetUrl: string;
}
