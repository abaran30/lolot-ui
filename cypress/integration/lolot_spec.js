describe('LOLOT', () => {
  it('should display the landing content', () => {
    cy.visit('http://localhost:4200');
    cy.get('.title-text').should('be.visible').should('contain', 'LOLOT');
  });

  it('should perform a search for a Summoner and display Champion Mastery data', () => {
    cy.searchForSummoner('AngryTaco');
    cy.testSummonerInfo('AngryTaco', 169);

    cy.testChampionMasterySummary(2, 1, 13, 10);
    cy.testNumberOfChampionMasteryRows(148);

    // Test first Champion Mastery entry
    cy.testChampionSquareAtIndex(0, 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/MissFortune.png');
    cy.testChampionNameAtIndex(0, 'Miss Fortune');
    cy.testMasteryBadgeAtIndex(0, 'assets/images/champion-mastery-badge-6.png');
    cy.testMasteryPointsAtIndex(0, '122,898');
    // TODO: Add test for Champion Mastery tokens
    cy.testHextechChestAcquiredAtIndex(0, false);

    // Test first Champion Mastery entry with Mastery Level 7
    cy.testChampionSquareAtIndex(1, 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Caitlyn.png');
    cy.testChampionNameAtIndex(1, 'Caitlyn');
    cy.testMasteryBadgeAtIndex(1, 'assets/images/champion-mastery-badge-7.png');
    cy.testMasteryPointsAtIndex(1, '115,286');
    // TODO: Add test for Champion Mastery tokens
    cy.testHextechChestAcquiredAtIndex(1, false);
    
    // Test first Champion Mastery entry with Mastery Level 5
    cy.testChampionSquareAtIndex(5, 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Lucian.png');
    cy.testChampionNameAtIndex(5, 'Lucian');
    cy.testMasteryBadgeAtIndex(5, 'assets/images/champion-mastery-badge-5.png');
    cy.testMasteryPointsAtIndex(5, '41,536');
    // TODO: Add test for Champion Mastery tokens
    cy.testHextechChestAcquiredAtIndex(5, false);

    // Test first Champion Mastery entry with Mastery Level 4
    cy.testChampionSquareAtIndex(24, 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Kaisa.png');
    cy.testChampionNameAtIndex(24, `Kai'Sa`);
    cy.testMasteryBadgeAtIndex(24, 'assets/images/champion-mastery-badge-4.png');
    cy.testMasteryPointsAtIndex(24, '21,596');
    // TODO: Add test for Champion Mastery tokens
    cy.testHextechChestAcquiredAtIndex(24, false);

    // Test first Champion Mastery entry with Hextech Chest acquired
    cy.testChampionSquareAtIndex(21, 'http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/Diana.png');
    cy.testChampionNameAtIndex(21, 'Diana');
    cy.testMasteryBadgeAtIndex(21, 'assets/images/champion-mastery-badge-6.png');
    cy.testMasteryPointsAtIndex(21, '26,101');
    // TODO: Add test for Champion Mastery tokens
    cy.testHextechChestAcquiredAtIndex(21, true);
  });
});
