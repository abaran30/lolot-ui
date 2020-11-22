import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {
  ChampionMasteriesSummaryComponent
} from '@app/champion-masteries/champion-masteries-summary/champion-masteries-summary.component';
import { mockChampionMasteriesResponseWithTokens } from '@app/mocks/mock-champion-masteries-response-with-tokens';

describe('ChampionMasteriesSummaryComponent', () => {
  let component: ChampionMasteriesSummaryComponent;
  let fixture: ComponentFixture<ChampionMasteriesSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionMasteriesSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesSummaryComponent);
    component = fixture.componentInstance;
    component.championMasteries = mockChampionMasteriesResponseWithTokens.championMasteries;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate Champion Masteries summary', () => {
    expect(component.numberOfChestsAcquired).toEqual(2);
    expect(component.numberOfLevel7Masteries).toEqual(1);
    expect(component.numberOfLevel6Masteries).toEqual(13);
    expect(component.numberOfLevel5Masteries).toEqual(10);
  });
});
