import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SummonerFormComponent } from 'src/app/shared/summoner-form/summoner-form.component';

describe('SummonerFormComponent', () => {
  let component: SummonerFormComponent;
  let fixture: ComponentFixture<SummonerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummonerFormComponent],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
