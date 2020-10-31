import { ChampionSearchPipe } from 'src/app/champion-masteries/champion-search-pipe/champion-search.pipe';

import { mockChampionMasteriesResponseWithTokens } from 'src/app/mocks/mock-champion-masteries-response-with-tokens';

describe('ChampionSearchPipe', () => {
  it('create an instance', () => {
    const pipe = new ChampionSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('should not filter if provided Champion name is undefined', () => {
    const pipe = new ChampionSearchPipe();
    expect(pipe.transform(mockChampionMasteriesResponseWithTokens.championMasteries, undefined).length).toEqual(148);
  });

  it('should filter Champion Masteries by provided Champion name', () => {
    const pipe = new ChampionSearchPipe();
    expect(pipe.transform(mockChampionMasteriesResponseWithTokens.championMasteries, 'Miss Fortune').length).toEqual(1);
  });

  it('should filter Champion Masteries by provided partial Champion name, case insensitive', () => {
    const pipe = new ChampionSearchPipe();
    expect(pipe.transform(mockChampionMasteriesResponseWithTokens.championMasteries, 'CA').length).toEqual(4);
  });
});
