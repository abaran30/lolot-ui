import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SummonerFormComponent } from 'src/app/shared/summoner-form/summoner-form.component';

describe('SummonerFormComponent', () => {
  let component: SummonerFormComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<SummonerFormComponent>;
  let router: Router;

  const testingModuleConfiguration = {
    declarations: [SummonerFormComponent],
    imports: [
      FormsModule,
      RouterTestingModule
    ]
  };

  const setUp = (configuration) => {
    TestBed.configureTestingModule(configuration).compileComponents();
    fixture = TestBed.createComponent(SummonerFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  };

  it('should create', () => {
    setUp(testingModuleConfiguration);
    expect(component).toBeTruthy();
  });

  it('should load the component with an empty form', () => {
    setUp({
      ...testingModuleConfiguration,
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { queryParams: { } } } }
      ]
    });
    expect(component.formModel.summonerName).toEqual('');
    expect(component.formModel.summonerRegion).toEqual('NA');
  });

  it('should redirect on form submit', () => {
    setUp({
      ...testingModuleConfiguration,
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { queryParams: { summonerName: 'AngryTaco', summonerRegion: 'NA' } } } }
      ]
    });
    const routerNavigateSpy = spyOn(router, 'navigate');
    element.querySelector('button').click();
    const expectedNavigationExtras: NavigationExtras = {
      queryParams: {
        ...component.formModel
      }
    };
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/champion-masteries'], expectedNavigationExtras);
  });
});
