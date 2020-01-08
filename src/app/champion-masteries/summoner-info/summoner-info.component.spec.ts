import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerInfoComponent } from 'src/app/champion-masteries/summoner-info/summoner-info.component';
import { LolAssetService } from 'src/app/core/lol-asset-service/lol-asset.service';
import { mockChampionMasteriesResponse } from 'src/app/mocks/mock-champion-masteries-response';

describe('SummonerInfoComponent', () => {
  let component: SummonerInfoComponent;
  let fixture: ComponentFixture<SummonerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummonerInfoComponent],
      providers: [LolAssetService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerInfoComponent);
    component = fixture.componentInstance;
    component.summoner = mockChampionMasteriesResponse.summoner;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
