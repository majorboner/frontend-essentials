import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileValidationErrors } from '../../consts/consts';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
  test('should return validation errors', async () => {
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
        validateErrors: [ProfileValidationErrors.NO_DATA],
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual([ProfileValidationErrors.NO_DATA]);
  });
  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
