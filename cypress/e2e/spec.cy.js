describe('dsewat62222011 browser tests', () => {
  it('visits the page', () => {
    cy.visit('https://quargsgreene.github.io/dsewat62222011/');
  });

  it('displays invisible text', () => {
    cy.get('.invisible').contains('Congratulations!', { timeout: 10000 });
  });
});
