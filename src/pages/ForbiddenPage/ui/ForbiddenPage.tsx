import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
	const { t } = useTranslation('about');
	return (
		<Page data-testid="ForbiddenPage">
			{t('У вас нет доступа к этой странице')}
			<Counter />
		</Page>
	);
};

export default ForbiddenPage;
