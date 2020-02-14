import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionMasteriesComponent } from './champion-masteries.component';
import { ChampionMasteriesErrorComponent } from 'src/app/champion-masteries/champion-masteries-error/champion-masteries-error.component';
import {
  ChampionMasteriesResultsComponent
} from 'src/app/champion-masteries/champion-masteries-results/champion-masteries-results.component';
import { ChampionMasteriesRoutingModule } from 'src/app/champion-masteries/champion-masteries-routing.module';
import {
  ChampionMasteriesSummaryComponent
} from 'src/app/champion-masteries/champion-masteries-summary/champion-masteries-summary.component';
import { ChampionMasteriesTableComponent } from 'src/app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { ChampionMasteryTokenComponent } from 'src/app/champion-masteries/champion-mastery-token/champion-mastery-token.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummonerInfoComponent } from 'src/app/champion-masteries/summoner-info/summoner-info.component';

@NgModule({
  declarations: [
    ChampionMasteriesComponent,
    ChampionMasteriesErrorComponent,
    ChampionMasteriesResultsComponent,
    ChampionMasteriesSummaryComponent,
    ChampionMasteriesTableComponent,
    ChampionMasteryTokenComponent,
    SummonerInfoComponent
  ],
  imports: [
    CommonModule,
    ChampionMasteriesRoutingModule,
    SharedModule
  ]
})
export class ChampionMasteriesModule { }
