import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
	test('should return readonly', async () => {
		const data = {
			username: 'admin',
			age: 21,
			country: Country.Russia,
			lastName: 'uallal',
			firstName: 'ddd',
			city: 'asssf',
			currency: Currency.RUB,
		};
		const state: DeepPartial<StateSchema> = {
			profile: {
				data,
				readonly: true,
			},
		};
		expect(getProfileReadonly(state as StateSchema)).toEqual(true);
	});
	test('should work with empty state', async () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
	});
});
