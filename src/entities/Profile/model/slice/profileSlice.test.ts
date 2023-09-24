import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { ProfileSchema, ProfileValidationErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 21,
  country: Country.Russia,
  lastName: 'uallal',
  firstName: 'ddd',
  city: 'asssf',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('close editing', () => {
    const state: DeepPartial<ProfileSchema> = {};
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstName: 'sas' } };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ firstName: 'sasas' }),
    )).toEqual({
      form: { firstName: 'sasas' },
    });
  });

  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ProfileValidationErrors.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
