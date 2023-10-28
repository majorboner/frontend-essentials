import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileValidationErrors } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 21,
  country: Country.Russia,
  lastName: 'uallal',
  firstName: 'ddd',
  city: 'asssf',
  currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, firstName: '', lastName: '' });

    expect(result).toEqual([ProfileValidationErrors.INCORRECT_NAME]);
  });

  test('should return age error', async () => {
    const result = validateProfileData({ ...data, age: NaN });

    expect(result).toEqual([ProfileValidationErrors.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ProfileValidationErrors.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({
      ...data, country: undefined, lastName: '', firstName: '', age: NaN,
    });

    expect(result).toEqual([
      ProfileValidationErrors.INCORRECT_NAME,
      ProfileValidationErrors.INCORRECT_AGE,
      ProfileValidationErrors.INCORRECT_COUNTRY,
    ]);
  });

  test('no data', async () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ProfileValidationErrors.NO_DATA]);
  });
});
