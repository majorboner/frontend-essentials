import { useTranslation } from 'react-i18next';
import { useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeature } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSidebarItems();
	const onToggle = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem
					item={item}
					collapsed={collapsed}
					key={item.path}
				/>
			)),
		[collapsed, sidebarItemsList],
	);
	const SidebarDeprecated = (
		<aside
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<VStack
				gap="8"
				className={cls.items}
			>
				{itemsList}
			</VStack>
			<Button
				data-testid="sidebar-switcher"
				theme={ThemeButton.BACKGROUND}
				className={classNames(cls.collapseButton, {}, [className])}
				square
				size={ButtonSize.L}
				onClick={onToggle}
			>
				{collapsed ? t('Сайдбар свернут') : t('Сайдбар развернут')}
			</Button>
			<HStack
				justify="center"
				max
				className={cls.switchers}
			>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</HStack>
		</aside>
	);

	const SidebarRedesined = (
		<aside
			data-testid="sidebar"
			className={classNames(
				cls.SidebarRedesigned,
				{ [cls.collapsedRedesigned]: collapsed },
				[className],
			)}
		>
			<AppLogo
				className={cls.appLogo}
				size={collapsed ? 30 : 50}
			/>
			<VStack
				role="navigation"
				gap="8"
				className={cls.items}
			>
				{itemsList}
			</VStack>
			<Icon
				Svg={ArrowIcon}
				onClick={onToggle}
				clickable
				data-testid="sidebar-switcher"
				className={classNames(cls.collapseButton, {}, [className])}
			/>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher
					short={collapsed}
					className={cls.lang}
				/>
			</div>
		</aside>
	);

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			off={SidebarDeprecated}
			on={SidebarRedesined}
		/>
	);
};
