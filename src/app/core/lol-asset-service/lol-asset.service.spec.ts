import { TestBed } from '@angular/core/testing';

import { LolAssetService } from 'src/app/core/lol-asset-service/lol-asset.service';

describe('LolAssetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [LolAssetService]
  }));

  it('should be created', () => {
    const service: LolAssetService = TestBed.get(LolAssetService);
    expect(service).toBeTruthy();
  });
});
