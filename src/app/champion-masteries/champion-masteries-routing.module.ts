import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionMasteriesComponent } from '@app/champion-masteries/champion-masteries.component';
import { ChampionMasteriesErrorComponent } from '@app/champion-masteries/champion-masteries-error/champion-masteries-error.component';
import {
  ChampionMasteriesResultsComponent
} from '@app/champion-masteries/champion-masteries-results/champion-masteries-results.component';

const routes: Routes = [
  {
    path: '', component: ChampionMasteriesComponent, children: [
      { path: '', component: ChampionMasteriesResultsComponent },
      { path: 'error', component: ChampionMasteriesErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionMasteriesRoutingModule { }
