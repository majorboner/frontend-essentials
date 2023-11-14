import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
	Button as ButtonDeprecated,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
	addCommentFormActions,
	addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { ToggleFeature } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { t } = useTranslation();
	const { className, onSendComment } = props;
	const text = useSelector(getAddCommentFormText);
	// const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback(
		(value: string) => {
			dispatch(addCommentFormActions.setText(value));
		},
		[dispatch],
	);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	}, [onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<ToggleFeature
				feature="isAppRedesigned"
				on={
					<Card
						padding="24"
						border="round"
						max
					>
						<HStack
							justify="between"
							max
							gap="16"
							className={classNames(cls.AddCommentFormRedesigned, {}, [
								className,
							])}
							data-testid="AddCommentForm"
						>
							<Input
								placeholder={t('Введите текст комментария')}
								value={text}
								onChange={onCommentTextChange}
								className={cls.input}
								data-testid="AddCommentForm.Input"
							/>
							<Button
								variant="outline"
								onClick={onSendHandler}
								data-testid="AddCommentForm.Send"
							>
								{t('Отправить')}
							</Button>
						</HStack>
					</Card>
				}
				off={
					<HStack
						align="center"
						justify="between"
						max
						className={classNames(cls.AddCommentForm, {}, [className])}
						data-testid="AddCommentForm"
					>
						<InputDeprecated
							placeholder={t('Введите текст комментария')}
							value={text}
							onChange={onCommentTextChange}
							className={cls.input}
							data-testid="AddCommentForm.Input"
						/>
						<ButtonDeprecated
							theme={ThemeButton.OUTLINE}
							onClick={onSendHandler}
							data-testid="AddCommentForm.Send"
						>
							{t('Отправить')}
						</ButtonDeprecated>
					</HStack>
				}
			/>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;
