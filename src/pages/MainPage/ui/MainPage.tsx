import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<Page data-testid="MainPage">
			<Text title={t('Главная страница')} />
			<Counter />
		</Page>
	);
};

export default MainPage;
