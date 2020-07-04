import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LolotService } from 'src/app/core/lolot-service/lolot.service';

describe('LolotService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LolotService]
  }));

  it('should be created', () => {
    const service: LolotService = TestBed.inject(LolotService);
    expect(service).toBeTruthy();
  });
});
