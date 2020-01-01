import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteriesSummaryComponent } from './champion-masteries-summary.component';

describe('ChampionMasteriesSummaryComponent', () => {
  let component: ChampionMasteriesSummaryComponent;
  let fixture: ComponentFixture<ChampionMasteriesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionMasteriesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
