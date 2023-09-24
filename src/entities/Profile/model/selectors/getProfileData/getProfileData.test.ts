import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from '../../../../Country/model/types/country';
import { Currency } from '../../../../Currency/model/types/currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return data', async () => {
    const data = {
      username: 'admin',
      age: 21,
      country: Country.Russia,
      firstName: 'uallal',
      lastName: 'ddd',
      city: 'asssf',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
