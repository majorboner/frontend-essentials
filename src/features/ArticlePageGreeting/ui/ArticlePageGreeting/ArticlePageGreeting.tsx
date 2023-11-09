import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageGreeting.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';

interface ArticlePageGreetingProps {
	className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const { isFirstVisit } = useJsonSettings();
	useEffect(() => {
		if (isFirstVisit) {
			setIsOpen(true);
			dispatch(saveJsonSettings({ isFirstVisit: false }));
		}
	}, [dispatch, isFirstVisit]);
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			className={classNames(cls.ArticlePageGreeting, {}, [className])}
		>
			<Text
				title={t('Добро пожаловать на страницу статей')}
				text={t('Тут возможно есть статьи')}
			/>
		</Modal>
	);
});
