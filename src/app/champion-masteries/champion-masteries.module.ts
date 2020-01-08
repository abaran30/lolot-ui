import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionMasteriesRoutingModule } from 'src/app/champion-masteries/champion-masteries-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChampionMasteriesTableComponent } from 'src/app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { SummonerInfoComponent } from 'src/app/champion-masteries/summoner-info/summoner-info.component';
import { ChampionMasteryTokenComponent } from 'src/app/champion-masteries/champion-mastery-token/champion-mastery-token.component';
import { ChampionMasteriesErrorComponent } from 'src/app/champion-masteries/champion-masteries-error/champion-masteries-error.component';
import {
  ChampionMasteriesResultsComponent
} from 'src/app/champion-masteries/champion-masteries-results/champion-masteries-results.component';
import {
  ChampionMasteriesSummaryComponent
} from 'src/app/champion-masteries/champion-masteries-summary/champion-masteries-summary.component';

@NgModule({
  declarations: [ChampionMasteriesRoutingModule.components, ChampionMasteriesTableComponent, SummonerInfoComponent, ChampionMasteryTokenComponent, ChampionMasteriesErrorComponent, ChampionMasteriesResultsComponent, ChampionMasteriesSummaryComponent],
  imports: [
    CommonModule,
    ChampionMasteriesRoutingModule,
    SharedModule
  ]
})
export class ChampionMasteriesModule { }
