import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();
	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};
	return (
		<VStack
			justify="center"
			align="center"
			className={classNames(cls.PageError, {}, [className])}
		>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button
				onClick={reloadPage}
				theme={ThemeButton.OUTLINE}
			>
				{t('Обновить страницу')}
			</Button>
		</VStack>
	);
};
