import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'champion-masteries/:id', loadChildren: () => import('../champion-masteries/champion-masteries-routing.module').
      then(m => m.ChampionMasteriesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [HomeComponent];
}
