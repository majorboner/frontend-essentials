import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page>
      {t('О сайте')}
      <Counter />
    </Page>
  );
};

export default AboutPage;
