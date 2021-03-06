import { Component, Input } from '@angular/core';

import { ChampionMastery } from '@app/core/models/champion-mastery';

@Component({
  selector: 'app-champion-masteries-table',
  templateUrl: './champion-masteries-table.component.html',
  styleUrls: ['./champion-masteries-table.component.scss']
})
export class ChampionMasteriesTableComponent {
  @Input() championMasteries: ChampionMastery[];
  championSearchText: string;
}
