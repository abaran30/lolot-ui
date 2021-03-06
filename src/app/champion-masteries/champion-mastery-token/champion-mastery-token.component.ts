import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion-mastery-token',
  templateUrl: './champion-mastery-token.component.html',
  styleUrls: ['./champion-mastery-token.component.scss']
})
export class ChampionMasteryTokenComponent implements OnInit {
  @Input() championSquareAssetUrl: string;
  @Input() currentChampionMasteryLevel: number;
  @Input() masteryTokensEarned: number;

  numberOfTokensArray: number[];

  ngOnInit() {
    this.numberOfTokensArray = Array(this.masteryTokensEarned).fill(0).map((value, index) => index);
  }
}
