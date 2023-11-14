import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Card } from '@/shared/ui/deprecated/Card';

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
		<>
			<Text title={feedbackTitle} />
			<Input
				value={feedback}
				onChange={setFeedback}
				placeholder={t('Ваш отзыв')}
				data-testid="RatingCard.Input"
			/>
		</>
	);

	return (
		<Card
			className={className}
			max
			data-testid="RatingCard"
		>
			<VStack
				align="center"
				gap="8"
				max
			>
				<Text title={starsCount ? t('Спасибо за оценку!') : title} />
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
						<HStack
							max
							gap="16"
							justify="end"
						>
							<Button
								onClick={cancelHandle}
								theme={ThemeButton.OUTLINE}
								data-testid="RatingCard.Close"
							>
								{t('Закрыть')}
							</Button>
							<Button
								onClick={acceptHandle}
								theme={ThemeButton.OUTLINE}
								data-testid="RatingCard.Send"
							>
								{t('Отправить')}
							</Button>
						</HStack>
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
						<Button
							fullWidth
							onClick={acceptHandle}
							size={ButtonSize.L}
							theme={ThemeButton.OUTLINE}
						>
							{t('Отправить')}
						</Button>
					</VStack>
				</Drawer>
			</MobileView>
		</Card>
	);
});
