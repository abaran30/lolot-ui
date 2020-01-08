import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ChampionMasteriesResultsComponent } from 'src/app/champion-masteries/champion-masteries-results/champion-masteries-results.component';
import { mockChampionMasteriesResponse } from 'src/app/mocks/mock-champion-masteries-response';
import { LolotService } from 'src/app/core/lolot-service/lolot.service';

describe('ChampionMasteriesResultsComponent', () => {
  let component: ChampionMasteriesResultsComponent;
  let fixture: ComponentFixture<ChampionMasteriesResultsComponent>;
  let lolotService;
  let getChampionMasteriesForSummonerSpy;

  beforeEach(async(() => {
    lolotService = jasmine.createSpyObj('LolotService', ['getChampionMasteriesForSummoner']);
    getChampionMasteriesForSummonerSpy = lolotService.getChampionMasteriesForSummoner.and.returnValue(of(mockChampionMasteriesResponse));

    TestBed.configureTestingModule({
      declarations: [ChampionMasteriesResultsComponent],
      imports: [RouterTestingModule],
      providers: [
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
});

