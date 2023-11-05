let profileId: string = '';

describe('Пользователь заходит на страницу профиля', () => {
	beforeEach(() => {
		cy.login('testuser', 'testpass').then((data) => {
			cy.visit(`/profile/${data.id}`);
			profileId = data.id;
		});
	});
	afterEach(() => {
		cy.resetProfile(profileId);
	});
	it('Профиль загружается', () => {
		cy.getByTestId('ProfileCard.firstName').should('have.value', 'Test');
	});
	it('Профиль редактируется', () => {
		cy.updateProfile();
		cy.getByTestId('ProfileCard.firstName').should('have.value', 'new');
		cy.getByTestId('ProfileCard.lastName').should('have.value', 'Lastname');
	});
});
