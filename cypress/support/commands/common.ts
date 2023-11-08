import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';

export const login = (
	username: string = 'testuser',
	password: string = 'testpass',
) => {
	cy.log(`Logging in as ${username}`);
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/login',
			body: {
				username,
				password,
			},
		})
		.then(({ body }) => {
			window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
			return body;
		});
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
	namespace Cypress {
		interface Chainable {
			login(username?: string, password?: string): Chainable<User>;
			getByTestId(testId: string): ReturnType<typeof cy.get>;
		}
	}
}