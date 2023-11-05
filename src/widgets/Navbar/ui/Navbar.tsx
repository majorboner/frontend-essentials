import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthOpen, setIsAuthOpen] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthOpen(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthOpen(true);
	}, []);

	if (authData) {
		return (
			<header className={classNames(cls.NavBar, {}, [className])}>
				<Text
					title={t('Ulalume App')}
					className={cls.appName}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={getRouteArticleCreate()}
					theme={AppLinkTheme.PRIMARY}
					className={cls.createBtn}
				>
					{t('Создать статью')}
				</AppLink>
				<HStack
					gap="16"
					className={cls.actions}
				>
					<NotificationButton />
					<AvatarDropdown />
				</HStack>
			</header>
		);
	}

	return (
		<header className={classNames(cls.NavBar, {}, [className])}>
			<Button
				onClick={onShowModal}
				className={cls.links}
				theme={ThemeButton.CLEAR}
			>
				{t('Войти')}
			</Button>
			{isAuthOpen && (
				<LoginModal
					isOpen={isAuthOpen}
					onClose={onCloseModal}
				/>
			)}
		</header>
	);
};

export default Navbar;
