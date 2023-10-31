import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    className,
    data,
    error = undefined,
    isLoading = false,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  if (isLoading) {
    return (
      <HStack
        justify="center"
        align="center"
        max
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <VStack gap="8">

        {data?.avatar
          && (
            <HStack justify="center" max>
              <Avatar src={data?.avatar} alt="user avatar" />
            </HStack>
          )}

        <Input
          value={data?.firstName}
          placeholder={t('имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastName}
          placeholder={t('фамилия')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          placeholder={t('возраст')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('город')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeCity}
        />
        <Input
          value={data?.avatar}
          placeholder={t('аватар')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeAvatar}
        />
        <Input
          value={data?.username}
          placeholder={t('никнейм')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeUsername}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    </div>
  );
};
