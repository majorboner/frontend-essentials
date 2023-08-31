import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeAge: (value: string) => void;
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
  } = props;

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
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
      <div className={cls.data}>
        <Input
          value={data?.firstName}
          placeholder={t('Ваше имя')}
          className={cls.input}
          readonly={readonly}
          onChange={onChangeFirstName}
        />
        <Input
          value={data?.lastName}
          placeholder={t('Ваша фамилия')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeLastName}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город')}
          readonly={readonly}
          className={cls.input}
          onChange={onChangeCity}
        />
      </div>
    </div>
  );
};
