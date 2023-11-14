import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { DesignSwitcher } from '@/features/designSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';

interface SettingsPageProps {
	className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
	const { t } = useTranslation();
	const { className } = props;
	return (
		<Page className={className}>
			<Text title={t('Настройки')} />
			<VStack>
				<DesignSwitcher />
			</VStack>
		</Page>
	);
});

export default SettingsPage;
