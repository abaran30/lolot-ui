import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionMasteryTokenComponent } from 'src/app/champion-masteries/champion-mastery-token/champion-mastery-token.component';

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
});
