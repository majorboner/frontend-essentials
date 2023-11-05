export const updateProfile = () => {
	cy.getByTestId('EditableProfileCardHeader.editButton').click();
	cy.getByTestId('ProfileCard.firstName').clear().type('new');
	cy.getByTestId('ProfileCard.lastName').clear().type('Lastname');
	cy.getByTestId('EditableProfileCardHeader.saveButton').click();
};

export const resetProfile = (profileId: string) =>
	cy.request({
		method: 'PUT',
		url: `http://localhost:8000/profile/${profileId}`,
		headers: { Authorization: 'a' },
		body: {
			id: '3',
			firstName: 'Test',
			lastName: 'Dummy',
			age: 0,
			currency: 'EUR',
			country: 'Russia',
			city: 'Санкт-Петербург',
			username: 'testuser',
			avatar:
				'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/crash_test_dummy.png',
		},
	});

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
