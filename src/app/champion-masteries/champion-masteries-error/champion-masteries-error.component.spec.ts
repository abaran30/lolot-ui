import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ChampionMasteriesErrorComponent } from '@app/champion-masteries/champion-masteries-error/champion-masteries-error.component';

describe('ChampionMasteriesErrorComponent', () => {
  let component: ChampionMasteriesErrorComponent;
  let fixture: ComponentFixture<ChampionMasteriesErrorComponent>;

  const testingModuleConfiguration = {
    imports: [RouterTestingModule],
    declarations: [ChampionMasteriesErrorComponent]
  };

  const setUp = (configuration) => {
    TestBed.configureTestingModule(configuration).compileComponents();
    fixture = TestBed.createComponent(ChampionMasteriesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should handle a 404 error', () => {
    setUp({
      ...testingModuleConfiguration,
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ errorCode: '404', summonerName: 'AngryTaco' }) } }
      ]
    });
    expect(component.errorMessageLine1).toEqual('Oops! Looks like summoner AngryTaco has not been found...');
    expect(component.errorMessageLine2).toEqual('Please check the name and region, and try again.');
  });

  it('should handle a non-404 error', () => {
    setUp({
      ...testingModuleConfiguration,
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ errorCode: '500' }) } }
      ]
    });
    expect(component.errorMessageLine1).toEqual('Uh oh... Looks like something went wrong on our end...');
    expect(component.errorMessageLine2).toEqual('Please try again later.');
  });
});
