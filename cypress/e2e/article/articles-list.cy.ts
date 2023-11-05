describe('Пользователь заходит на страницу со статьями', () => {
  beforeEach(() => {
    cy.login('testuser', 'testpass').then(() => {
      cy.visit('/articles');
    });
  });
  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
  });
  it('На стабах (фикстурах)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
  });
  it.skip('ПРИМЕР СКИПНУТОГО ТЕСТА', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.at.least', 3);
    cy.get('sdasdfa').should('exist');
  });
});
