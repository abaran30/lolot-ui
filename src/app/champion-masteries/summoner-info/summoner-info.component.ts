import { Component, Input } from '@angular/core';

import { Summoner } from 'src/app/core/models/summoner';

@Component({
  selector: 'app-summoner-info',
  templateUrl: './summoner-info.component.html',
  styleUrls: ['./summoner-info.component.scss']
})
export class SummonerInfoComponent {
  @Input() summoner: Summoner;
}
