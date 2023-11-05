describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Пользователь открывает несуществующую страницу', () => {
      cy.visit('/ajsndinioew');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('testuser', 'testpass');
    });
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });
    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/3');
      cy.getByTestId('ProfilePage').should('exist');
    });
    it('Переход открывает список статей', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
