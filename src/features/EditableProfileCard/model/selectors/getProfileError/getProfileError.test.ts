import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return error', async () => {
    const error = 'eeerrr';
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'eeerrr',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(error);
  });
  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
