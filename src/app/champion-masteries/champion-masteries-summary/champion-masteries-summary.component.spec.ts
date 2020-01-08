import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ChampionMasteriesSummaryComponent
} from 'src/app/champion-masteries/champion-masteries-summary/champion-masteries-summary.component';
import { mockChampionMasteriesResponseWithTokens } from 'src/app/mocks/mock-champion-masteries-response-with-tokens';

describe('ChampionMasteriesSummaryComponent', () => {
  let component: ChampionMasteriesSummaryComponent;
  let fixture: ComponentFixture<ChampionMasteriesSummaryComponent>;

  beforeEach(async(() => {
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
});
