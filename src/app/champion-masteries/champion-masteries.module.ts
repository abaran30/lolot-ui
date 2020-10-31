import { NgModule } from '@angular/core';

import { ChampionMasteriesComponent } from '@app/champion-masteries/champion-masteries.component';
import { ChampionMasteriesErrorComponent } from '@app/champion-masteries/champion-masteries-error/champion-masteries-error.component';
import {
  ChampionMasteriesResultsComponent
} from '@app/champion-masteries/champion-masteries-results/champion-masteries-results.component';
import { ChampionMasteriesRoutingModule } from '@app/champion-masteries/champion-masteries-routing.module';
import {
  ChampionMasteriesSummaryComponent
} from '@app/champion-masteries/champion-masteries-summary/champion-masteries-summary.component';
import { ChampionMasteriesTableComponent } from '@app/champion-masteries/champion-masteries-table/champion-masteries-table.component';
import { ChampionMasteryTokenComponent } from '@app/champion-masteries/champion-mastery-token/champion-mastery-token.component';
import { ChampionSearchPipe } from '@app/champion-masteries/champion-search-pipe/champion-search.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { SummonerInfoComponent } from '@app/champion-masteries/summoner-info/summoner-info.component';

@NgModule({
  declarations: [
    ChampionMasteriesComponent,
    ChampionMasteriesErrorComponent,
    ChampionMasteriesResultsComponent,
    ChampionMasteriesSummaryComponent,
    ChampionMasteriesTableComponent,
    ChampionMasteryTokenComponent,
    ChampionSearchPipe,
    SummonerInfoComponent
  ],
  imports: [
    ChampionMasteriesRoutingModule,
    SharedModule
  ]
})
export class ChampionMasteriesModule { }
