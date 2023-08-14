import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error();
    }
  });
  const { t } = useTranslation('about');
  return <div>{t('О сайте')}</div>;
};

export default AboutPage;
