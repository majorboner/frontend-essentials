import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = ({
	className,
}: EditableProfileCardHeaderProps) => {
	const { t } = useTranslation('profile');
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;
	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();
	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);
	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);
	const onSaveEdit = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);
	return (
		<HStack
			max
			justify="between"
			className={classNames('', {}, [className])}
		>
			<Text title={t('Профиль')} />
			{canEdit && (
				<div>
					{readonly ? (
						<Button
							theme={ThemeButton.OUTLINE}
							onClick={onEdit}
							data-testid="EditableProfileCardHeader.editButton"
						>
							{t('Редактировать')}
						</Button>
					) : (
						<>
							<Button
								theme={ThemeButton.OUTLINE}
								onClick={onSaveEdit}
								data-testid="EditableProfileCardHeader.saveButton"
							>
								{t('Сохранить')}
							</Button>
							<Button
								theme={ThemeButton.OUTLINE}
								onClick={onCancelEdit}
							>
								{t('Отменить')}
							</Button>
						</>
					)}
				</div>
			)}
		</HStack>
	);
};
