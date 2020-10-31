import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteryTokenComponent } from '@app/champion-masteries/champion-mastery-token/champion-mastery-token.component';
import { mockChampionMasteriesResponseWithTokens } from '@app/mocks/mock-champion-masteries-response-with-tokens';

describe('ChampionMasteryTokenComponent', () => {
  let component: ChampionMasteryTokenComponent;
  let fixture: ComponentFixture<ChampionMasteryTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionMasteryTokenComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteryTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the number of Champion Mastery tokens', () => {
    component.masteryTokensEarned = mockChampionMasteriesResponseWithTokens.championMasteries[0].tokensEarned;
    component.ngOnInit();
    expect(component.numberOfTokensArray).toEqual([0, 1]);

    component.masteryTokensEarned = mockChampionMasteriesResponseWithTokens.championMasteries[1].tokensEarned;
    component.ngOnInit();
    expect(component.numberOfTokensArray).toEqual([]);

    component.masteryTokensEarned = mockChampionMasteriesResponseWithTokens.championMasteries[2].tokensEarned;
    component.ngOnInit();
    expect(component.numberOfTokensArray).toEqual([0]);
  });

  it('should get the Champion mastery token color', () => {
    component.currentChampionMasteryLevel = mockChampionMasteriesResponseWithTokens.championMasteries[0].championLevel;
    expect(component.getMasteryTokenBorderColor()).toEqual('#49B9B9');

    component.currentChampionMasteryLevel = mockChampionMasteriesResponseWithTokens.championMasteries[5].championLevel;
    expect(component.getMasteryTokenBorderColor()).toEqual('#F24AD7');
  });
});
