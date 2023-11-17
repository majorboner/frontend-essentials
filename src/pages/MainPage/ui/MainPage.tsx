import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<Page data-testid="MainPage">
			<Text title={t('Главная страница')} />
		</Page>
	);
};

export default MainPage;
