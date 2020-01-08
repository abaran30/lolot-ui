import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChampionMasteriesErrorComponent } from 'src/app/champion-masteries/champion-masteries-error/champion-masteries-error.component';

describe('ChampionMasteriesErrorComponent', () => {
  let component: ChampionMasteriesErrorComponent;
  let fixture: ComponentFixture<ChampionMasteriesErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ChampionMasteriesErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionMasteriesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
