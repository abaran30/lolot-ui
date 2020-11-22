import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChampionMasteriesTableComponent } from '@app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { ChampionSearchPipe } from '@app/champion-masteries/champion-search-pipe/champion-search.pipe';

describe('ChampionMasteriesTableComponent', () => {
  let component: ChampionMasteriesTableComponent;
  let fixture: ComponentFixture<ChampionMasteriesTableComponent>;

  beforeEach(waitForAsync(() => {
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
