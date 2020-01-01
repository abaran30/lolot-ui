import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LolotService } from './lolot.service';

describe('LolotService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LolotService]
  }));

  it('should be created', () => {
    const service: LolotService = TestBed.get(LolotService);
    expect(service).toBeTruthy();
  });
});
