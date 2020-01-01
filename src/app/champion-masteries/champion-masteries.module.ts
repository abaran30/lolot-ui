import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionMasteriesRoutingModule } from './champion-masteries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChampionMasteriesTableComponent } from './champion-masteries-table/champion-masteries-table.component';
import { SummonerInfoComponent } from './summoner-info/summoner-info.component';
import { ChampionMasteryTokenComponent } from './champion-mastery-token/champion-mastery-token.component';
import { ChampionMasteriesErrorComponent } from './champion-masteries-error/champion-masteries-error.component';
import { ChampionMasteriesResultsComponent } from './champion-masteries-results/champion-masteries-results.component';
import { ChampionMasteriesSummaryComponent } from './champion-masteries-summary/champion-masteries-summary.component';

@NgModule({
  declarations: [ChampionMasteriesRoutingModule.components, ChampionMasteriesTableComponent, SummonerInfoComponent, ChampionMasteryTokenComponent, ChampionMasteriesErrorComponent, ChampionMasteriesResultsComponent, ChampionMasteriesSummaryComponent],
  imports: [
    CommonModule,
    ChampionMasteriesRoutingModule,
    SharedModule
  ]
})
export class ChampionMasteriesModule { }
