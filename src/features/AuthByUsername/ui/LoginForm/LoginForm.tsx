import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder="Login:"
        autofocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder="Password:"
      />
      <Button className={cls.loginBtn} theme={ThemeButton.BACKGROUND}>
        {t('Войти')}
      </Button>
    </div>
  );
};
