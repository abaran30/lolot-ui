describe('LOLOT', () => {
  it('should display the landing content', () => {
    cy.visit('http://localhost:4200');
    cy.get('.title-text').should('be.visible').should('contain', 'LOLOT');
  });

  it('should perform a search for a Summoner and display Champion Mastery data', () => {
    cy.get('input').type('AngryTaco');
    cy.get('.fa-search').click();
    cy.get('[data-cy=summoner-name]').should('be.visible').should('contain', 'AngryTaco');
    cy.get('[data-cy=summoner-level]').should('be.visible').should('contain', 'Level 169');
    cy.get('[data-cy=number-of-chests-acquired]').should('be.visible').should('contain', '2 Hextech Chests acquired');
    cy.get('[data-cy=mastery-7-champions]').should('be.visible').should('contain', '1 Champion with Mastery Level 7');
    cy.get('[data-cy=mastery-6-champions]').should('be.visible').should('contain', '13 Champions with Mastery Level 6');
    cy.get('[data-cy=mastery-5-champions]').should('be.visible').should('contain', '10 Champions with Mastery Level 5');
    cy.get('[data-cy=champion-mastery-row').should('have.length', 148);
    // TODO: Test different Champion Mastery row content
  });
});
