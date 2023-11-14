import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeature } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

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

	const NavbarWithAuthDeprecated = (
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

	const NavbarWithAuthRedesigned = (
		<header className={classNames(cls.NavbarRedesigned, {}, [className])}>
			<HStack
				gap="16"
				className={cls.actions}
			>
				<NotificationButton />
				<AvatarDropdown />
			</HStack>
		</header>
	);

	const NavbarDeprecated = (
		<header className={classNames(cls.NavBar, {}, [className])}>
			<ButtonDeprecated
				onClick={onShowModal}
				className={cls.links}
				theme={ThemeButton.CLEAR}
			>
				{t('Войти')}
			</ButtonDeprecated>
			{isAuthOpen && (
				<LoginModal
					isOpen={isAuthOpen}
					onClose={onCloseModal}
				/>
			)}
		</header>
	);

	const NavbarRedesigned = (
		<header className={classNames(cls.NavbarRedesigned, {}, [className])}>
			<Button
				onClick={onShowModal}
				className={cls.links}
				variant="clear"
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

	if (authData) {
		return (
			<ToggleFeature
				feature="isAppRedesigned"
				on={NavbarWithAuthRedesigned}
				off={NavbarWithAuthDeprecated}
			/>
		);
	}

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={NavbarRedesigned}
			off={NavbarDeprecated}
		/>
	);
};

export default Navbar;
