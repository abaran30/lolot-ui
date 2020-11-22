import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import {
  ChampionMasteriesResultsComponent
} from '@app/champion-masteries/champion-masteries-results/champion-masteries-results.component';
import { LolotService } from '@app/core/lolot-service/lolot.service';
import { mockChampionMasteriesResponse } from '@app/mocks/mock-champion-masteries-response';


describe('ChampionMasteriesResultsComponent', () => {
  let component: ChampionMasteriesResultsComponent;
  let fixture: ComponentFixture<ChampionMasteriesResultsComponent>;
  let lolotService;
  let getChampionMasteriesForSummonerSpy;

  beforeEach(waitForAsync(() => {
    lolotService = jasmine.createSpyObj('LolotService', ['getChampionMasteriesForSummoner']);
    getChampionMasteriesForSummonerSpy = lolotService.getChampionMasteriesForSummoner.and.returnValue(of(mockChampionMasteriesResponse));

    TestBed.configureTestingModule({
      declarations: [ChampionMasteriesResultsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              summonerName: 'AngryTaco',
              summonerRegion: 'NA'
            })
          }
        },
        { provide: LolotService, useValue: lolotService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request Champion Masteries', () => {
    expect(getChampionMasteriesForSummonerSpy).toHaveBeenCalledWith('AngryTaco', 'NA');
  });

  it('should get Champion Masteries response', () => {
    component.championMasteriesResponse$.pipe(take(1)).subscribe(
      championMasteriesResponse => {
        expect(championMasteriesResponse.summoner).toEqual(mockChampionMasteriesResponse.summoner);
        expect(championMasteriesResponse.championMasteries).toEqual(mockChampionMasteriesResponse.championMasteries);
      }
    );
  });
});
