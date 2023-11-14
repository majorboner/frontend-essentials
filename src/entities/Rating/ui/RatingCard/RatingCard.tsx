import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
	Button as ButtonDeprecated,
	ButtonSize,
	ThemeButton,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';

interface RatingCardProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
	rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
	const { t } = useTranslation();
	const {
		className,
		title,
		feedbackTitle,
		hasFeedback,
		onCancel,
		onAccept,
		rate = 0,
	} = props;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [starsCount, setStarsCount] = useState(rate);
	const [feedback, setFeedback] = useState('');

	const onSelectStars = useCallback(
		(selectedStarsCount: number) => {
			setStarsCount(selectedStarsCount);
			if (hasFeedback) {
				setIsModalOpen(true);
			} else {
				onAccept?.(selectedStarsCount);
			}
		},
		[hasFeedback, onAccept],
	);

	const acceptHandle = useCallback(() => {
		setIsModalOpen(false);
		onAccept?.(starsCount, feedback);
	}, [feedback, onAccept, starsCount]);

	const cancelHandle = useCallback(() => {
		setIsModalOpen(false);
		onCancel?.(starsCount);
	}, [onCancel, starsCount]);

	const modalContent = (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<>
					<Text title={feedbackTitle} />
					<Input
						value={feedback}
						onChange={setFeedback}
						placeholder={t('Ваш отзыв')}
						data-testid="RatingCard.Input"
					/>
				</>
			}
			off={
				<>
					<TextDeprecated title={feedbackTitle} />
					<InputDeprecated
						value={feedback}
						onChange={setFeedback}
						placeholder={t('Ваш отзыв')}
						data-testid="RatingCard.Input"
					/>
				</>
			}
		/>
	);

	const content = (
		<>
			<VStack
				align="center"
				gap="8"
				max
			>
				<ToggleFeature
					feature="isAppRedesigned"
					on={<Text title={starsCount ? t('Спасибо за оценку!') : title} />}
					off={
						<TextDeprecated
							title={starsCount ? t('Спасибо за оценку!') : title}
						/>
					}
				/>

				<StarRating
					selectedStars={starsCount}
					size={40}
					onSelect={onSelectStars}
				/>
			</VStack>
			<BrowserView>
				<Modal
					isOpen={isModalOpen}
					lazy
				>
					<VStack
						gap="32"
						max
					>
						{modalContent}
						<ToggleFeature
							feature="isAppRedesigned"
							on={
								<HStack
									max
									gap="16"
									justify="end"
								>
									<Button
										onClick={cancelHandle}
										variant="outline"
										data-testid="RatingCard.Close"
									>
										{t('Закрыть')}
									</Button>
									<Button
										onClick={acceptHandle}
										variant="outline"
										data-testid="RatingCard.Send"
									>
										{t('Отправить')}
									</Button>
								</HStack>
							}
							off={
								<HStack
									max
									gap="16"
									justify="end"
								>
									<ButtonDeprecated
										onClick={cancelHandle}
										theme={ThemeButton.OUTLINE}
										data-testid="RatingCard.Close"
									>
										{t('Закрыть')}
									</ButtonDeprecated>
									<ButtonDeprecated
										onClick={acceptHandle}
										theme={ThemeButton.OUTLINE}
										data-testid="RatingCard.Send"
									>
										{t('Отправить')}
									</ButtonDeprecated>
								</HStack>
							}
						/>
					</VStack>
				</Modal>
			</BrowserView>
			<MobileView>
				<Drawer
					isOpen={isModalOpen}
					lazy
					onClose={cancelHandle}
				>
					<VStack gap="32">
						{modalContent}
						<ToggleFeature
							feature="isAppRedesigned"
							on={
								<Button
									fullWidth
									onClick={acceptHandle}
									size="size-l"
									variant="outline"
								>
									{t('Отправить')}
								</Button>
							}
							off={
								<ButtonDeprecated
									fullWidth
									onClick={acceptHandle}
									size={ButtonSize.L}
									theme={ThemeButton.OUTLINE}
								>
									{t('Отправить')}
								</ButtonDeprecated>
							}
						/>
					</VStack>
				</Drawer>
			</MobileView>
		</>
	);

	return (
		<ToggleFeature
			feature="isAppRedesigned"
			on={
				<Card
					max
					padding="24"
					border="round"
					data-testid="RatingCard"
				>
					{content}
				</Card>
			}
			off={
				<CardDeprecated
					className={className}
					max
					data-testid="RatingCard"
				>
					{content}
				</CardDeprecated>
			}
		/>
	);
});
