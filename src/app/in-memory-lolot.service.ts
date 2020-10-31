import { InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api';

// import { mockChampionMasteriesResponse } from 'src/app/mocks/mock-champion-masteries-response';
import { mockChampionMasteriesResponseWithTokens } from 'src/app/mocks/mock-champion-masteries-response-with-tokens';

export class InMemoryLolotService implements InMemoryDbService {
  createDb() {
    // const championMasteries = mockChampionMasteriesResponse;
    const championMasteries = mockChampionMasteriesResponseWithTokens;

    return {
      'champion-masteries': championMasteries
    };
  }

  // Override "parseRequestUrl" so that GET requests with query params get treated as GET requests without query params
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url.substring(0, url.indexOf('?')));
    return parsed;
  }
}
