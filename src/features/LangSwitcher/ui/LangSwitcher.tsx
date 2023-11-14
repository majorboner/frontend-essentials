import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import cls from './LangSwitcher.module.scss';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
	className?: string;
	short: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggle = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Button
					onClick={toggle}
					variant="clear"
				>
					{short ? t('Короткий Язык') : t('Длинный Язык')}
				</Button>
			}
			off={
				<ButtonDeprecated
					theme={ThemeButton.CLEAR}
					onClick={toggle}
					className={classNames(cls.LangSwitcher, {}, [className])}
				>
					{short ? t('Короткий Язык') : t('Длинный Язык')}
				</ButtonDeprecated>
			}
		/>
	);
});
