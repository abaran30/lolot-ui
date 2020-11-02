import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChampionMasteriesTableComponent } from '@app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { ChampionSearchPipe } from '@app/champion-masteries/champion-search-pipe/champion-search.pipe';

describe('ChampionMasteriesTableComponent', () => {
  let component: ChampionMasteriesTableComponent;
  let fixture: ComponentFixture<ChampionMasteriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChampionMasteriesTableComponent,
        ChampionSearchPipe
      ],
      imports: [FormsModule],
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
