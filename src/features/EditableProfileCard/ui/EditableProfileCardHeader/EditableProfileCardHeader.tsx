import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

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
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Card
					padding="16"
					max
				>
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
										variant="outline"
										onClick={onEdit}
										data-testid="EditableProfileCardHeader.editButton"
									>
										{t('Редактировать')}
									</Button>
								) : (
									<HStack gap="8">
										<Button
											variant="outline"
											onClick={onSaveEdit}
											color="success"
											data-testid="EditableProfileCardHeader.saveButton"
										>
											{t('Сохранить')}
										</Button>
										<Button
											variant="outline"
											onClick={onCancelEdit}
											color="error"
										>
											{t('Отменить')}
										</Button>
									</HStack>
								)}
							</div>
						)}
					</HStack>
				</Card>
			}
			off={
				<HStack
					max
					justify="between"
					className={classNames('', {}, [className])}
				>
					<TextDeprecated title={t('Профиль')} />
					{canEdit && (
						<div>
							{readonly ? (
								<ButtonDeprecated
									theme={ThemeButton.OUTLINE}
									onClick={onEdit}
									data-testid="EditableProfileCardHeader.editButton"
								>
									{t('Редактировать')}
								</ButtonDeprecated>
							) : (
								<>
									<ButtonDeprecated
										theme={ThemeButton.OUTLINE}
										onClick={onSaveEdit}
										data-testid="EditableProfileCardHeader.saveButton"
									>
										{t('Сохранить')}
									</ButtonDeprecated>
									<ButtonDeprecated
										theme={ThemeButton.OUTLINE}
										onClick={onCancelEdit}
									>
										{t('Отменить')}
									</ButtonDeprecated>
								</>
							)}
						</div>
					)}
				</HStack>
			}
		/>
	);
};
