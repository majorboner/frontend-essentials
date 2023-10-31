import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileRating } from '@/features/ProfileRating';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка')}
        text={t('Попробуйте обновить страницу')}
      />
    );
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCard />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>

  );
};

export default ProfilePage;
