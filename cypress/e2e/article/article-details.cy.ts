let testArticleId = '';

describe('Пользователь открывает страницу статьи', () => {
	beforeEach(() => {
		cy.login();
		cy.createTestArticle().then((article) => {
			testArticleId = article.id;
			cy.visit(`articles/${testArticleId}`);
			cy.wait(1000);
		});
	});

	afterEach(() => {
		cy.deleteTestArticle(testArticleId);
	});

	it('и она загружается корректно', () => {
		cy.getByTestId('ArticleDetails.Info').should('exist');
	});

	it('рекомендации подгружаются', () => {
		cy.getByTestId('ArticleRecommendationsList').should('exist');
	});

	it('оценка ставится', () => {
		cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(4, 'feedback text');
		cy.get('[data-selected=true]').should('have.length', 4);
	});

	it('и оставляет комментарий', () => {
		cy.addComment('test comment');
		cy.getByTestId('CommentCard').should('have.length.at.least', 1);
	});
});
