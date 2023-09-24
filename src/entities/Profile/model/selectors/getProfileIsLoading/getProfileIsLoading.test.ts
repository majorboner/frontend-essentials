import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country/model/types/country';
import { Currency } from '../../../../Currency/model/types/currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return isLoading', async () => {
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
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
