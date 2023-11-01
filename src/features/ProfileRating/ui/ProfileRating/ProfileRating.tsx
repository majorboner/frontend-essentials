import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { getUserAuthData } from '@/entities/User';

interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
  const { t } = useTranslation('profile');
  const { className, profileId } = props;
  const userData = useSelector(getUserAuthData);
  const { isLoading, data } = getProfileRating({ profileId, userId: userData!.id });
  const [rateProfileMutation] = useRateProfile();

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        profileId,
        rate: starsCount,
        userId: userData!.id,
        feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [profileId, rateProfileMutation, userData]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback);
  }, [handleRateProfile]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount);
  }, [handleRateProfile]);

  if (isLoading) {
    return (<Skeleton width="100%" height={120} />);
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t('Оцените профиль')}
      hasFeedback
      feedbackTitle={t('Поставьте оценку от 1 до 5 и напишите комментарий')}
      rate={rating?.rate}
    />
  );
});
