import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
  test('should return first name', async () => {
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
      },
    };
    expect(getProfileFirstName(state as StateSchema)).toEqual('ddd');
  });
  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstName(state as StateSchema)).toEqual(undefined);
  });
});
