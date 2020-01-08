import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteriesComponent } from 'src/app/champion-masteries/champion-masteries.component';

describe('ChampionMasteriesComponent', () => {
  let component: ChampionMasteriesComponent;
  let fixture: ComponentFixture<ChampionMasteriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChampionMasteriesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});