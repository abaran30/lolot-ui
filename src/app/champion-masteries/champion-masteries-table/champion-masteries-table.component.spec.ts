import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteriesTableComponent } from 'src/app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { LolAssetService } from 'src/app/core/lol-asset-service/lol-asset.service';

describe('ChampionMasteriesTableComponent', () => {
  let component: ChampionMasteriesTableComponent;
  let fixture: ComponentFixture<ChampionMasteriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionMasteriesTableComponent],
      providers: [LolAssetService], // TODO: Mock LolotAssetService
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
