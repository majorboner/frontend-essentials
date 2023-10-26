import { Profile } from 'entities/Profile';
import { ProfileValidationErrors } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ProfileValidationErrors.NO_DATA];
  }

  const {
    firstName, lastName, age, country,
  } = profile;

  const errors: ProfileValidationErrors[] = [];

  if (!firstName || !lastName) {
    errors.push(ProfileValidationErrors.INCORRECT_NAME);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileValidationErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ProfileValidationErrors.INCORRECT_COUNTRY);
  }

  return errors;
};
