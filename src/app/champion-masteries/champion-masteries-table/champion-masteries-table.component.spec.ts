import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteriesTableComponent } from './champion-masteries-table.component';

describe('ChampionMasteriesTableComponent', () => {
  let component: ChampionMasteriesTableComponent;
  let fixture: ComponentFixture<ChampionMasteriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionMasteriesTableComponent ]
    })
    .compileComponents();
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
