import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionMasteriesComponent } from './champion-masteries.component';
import { ChampionMasteriesErrorComponent } from './champion-masteries-error/champion-masteries-error.component';
import { ChampionMasteriesResultsComponent } from './champion-masteries-results/champion-masteries-results.component';

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
export class ChampionMasteriesRoutingModule {
  static components = [ChampionMasteriesComponent];
}
