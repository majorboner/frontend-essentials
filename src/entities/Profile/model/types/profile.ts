import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  firstName?: string,
  lastName?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile | undefined;
  form?: Profile | undefined;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
