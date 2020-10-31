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

  it('should get the Mastery badge img src', () => {
    expect(component.getChampionMasteryBadgeImgSrc(1)).toEqual('assets/images/champion-mastery-badge-1.png');
    expect(component.getChampionMasteryBadgeImgSrc(2)).toEqual('assets/images/champion-mastery-badge-2.png');
    expect(component.getChampionMasteryBadgeImgSrc(3)).toEqual('assets/images/champion-mastery-badge-3.png');
    expect(component.getChampionMasteryBadgeImgSrc(4)).toEqual('assets/images/champion-mastery-badge-4.png');
    expect(component.getChampionMasteryBadgeImgSrc(5)).toEqual('assets/images/champion-mastery-badge-5.png');
    expect(component.getChampionMasteryBadgeImgSrc(6)).toEqual('assets/images/champion-mastery-badge-6.png');
    expect(component.getChampionMasteryBadgeImgSrc(7)).toEqual('assets/images/champion-mastery-badge-7.png');
  });
});
