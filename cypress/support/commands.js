const getNumberOfMasteriesTextToContain = (numberOfMasteries, masteryLevel) => {
  return `${numberOfMasteries} ${numberOfMasteries > 1 ? 'Champions' : 'Champion'} with Mastery Level ${masteryLevel}`
};

Cypress.Commands.add('searchForSummoner', (summonerName) => {
  cy.get('input').type(summonerName);
  cy.get('.fa-search').click();
});

Cypress.Commands.add('testSummonerInfo', (summonerName, summonerLevel) => {
  cy.get('[data-cy=summoner-name]').should('be.visible').should('contain', summonerName);
  cy.get('[data-cy=summoner-level]').should('be.visible').should('contain', `Level ${summonerLevel}`);
});

Cypress.Commands.add('testChampionMasterySummary', (numberOfChestsAcquired, numberOfLevel7Masteries, numberOfLevel6Masteries, numberOfLevel5Masteries) => {
  cy.get('[data-cy=number-of-chests-acquired]').should('be.visible').should('contain', `${numberOfChestsAcquired} Hextech ${numberOfChestsAcquired > 1 ? 'Chests' : 'Chest'} acquired`);
  cy.get('[data-cy=mastery-7-champions]').should('be.visible').should('contain', getNumberOfMasteriesTextToContain(numberOfLevel7Masteries, 7));
  cy.get('[data-cy=mastery-6-champions]').should('be.visible').should('contain', getNumberOfMasteriesTextToContain(numberOfLevel6Masteries, 6));
  cy.get('[data-cy=mastery-5-champions]').should('be.visible').should('contain', getNumberOfMasteriesTextToContain(numberOfLevel5Masteries, 5));
});

Cypress.Commands.add('testNumberOfChampionMasteryRows', (numberOfChampionMasteryRows) => {
  cy.get('[data-cy=champion-mastery-row]').should('have.length', numberOfChampionMasteryRows);
});

Cypress.Commands.add('testChampionSquareAtIndex', (index, urlToContain) => {
  cy.get('[data-cy=champion-square]').eq(index).should('have.attr', 'src', urlToContain);
});

Cypress.Commands.add('testChampionNameAtIndex', (index, championNameToContain) => {
  cy.get('[data-cy=champion-name]').eq(index).should('contain', championNameToContain);
});

Cypress.Commands.add('testMasteryBadgeAtIndex', (index, urlToContain) => {
  cy.get('[data-cy=champion-mastery-badge]').eq(index).should('have.attr', 'src', urlToContain);
});

Cypress.Commands.add('testMasteryPointsAtIndex', (index, masteryPointsStringToContain) => {
  cy.get('[data-cy=champion-mastery-points]').eq(index).should('contain', masteryPointsStringToContain);
});

Cypress.Commands.add('testMasteryTokensAtIndex', (index, length, urlToContain = undefined, borderColorToContain = undefined) => {
  if (length === 0) {
    cy.get('[data-cy=champion-mastery-tokens-row]').eq(index).children().first().children().should('have.length', 0);
  } else {
    const championMasteryTokensElements = cy.get('[data-cy=champion-mastery-tokens-row]').eq(index).children().first().children().first().children();
    championMasteryTokensElements.should('have.length', length);
    championMasteryTokensElements.first().children().first().
      should('have.attr', 'src', urlToContain).
      should('have.css', 'border-color', borderColorToContain);
  }
});

Cypress.Commands.add('testHextechChestAcquiredAtIndex', (index, expectedToExist) => {
  cy.get('[data-cy=champion-mastery-row]').eq(index).
    children('[data-cy=hextech-chest-granted-col]').
    children('[data-cy=hextech-chest-granted]').should(expectedToExist ? 'be.visible' : 'not.be.visible');
});
