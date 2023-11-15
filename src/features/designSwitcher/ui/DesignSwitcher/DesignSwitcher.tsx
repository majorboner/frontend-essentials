import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface DesignSwitcherProps {
	className?: string;
}

export const DesignSwitcher = memo((props: DesignSwitcherProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const dispatch = useAppDispatch();
	const userData = useSelector(getUserAuthData);
	const isAppRedesigned = getFeatureFlag('isAppRedesigned');
	const [isLoading, setIsLoading] = useState(false);
	const forceUpdate = useForceUpdate();
	const items = [
		{ content: t('Новый'), value: 'new' },
		{ content: t('Старый'), value: 'old' },
	];
	const onChange = async (value: string) => {
		if (userData) {
			setIsLoading(true);
			await dispatch(
				updateFeatureFlag({
					userId: userData.id,
					newFeatures: {
						isAppRedesigned: value === 'new',
					},
				}),
			);
			setIsLoading(false);
			forceUpdate();
		}
	};
	return (
		<HStack>
			<Text text={t('Вариант интерфейса')} />
			{isLoading ? (
				<Skeleton
					height={40}
					width={100}
				/>
			) : (
				<ListBox
					onChange={onChange}
					options={items}
					value={isAppRedesigned ? 'new' : 'old'}
					className={classNames('', {}, [className])}
				/>
			)}
		</HStack>
	);
});
