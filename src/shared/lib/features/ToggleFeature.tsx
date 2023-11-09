import { ReactElement, memo } from 'react';
import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatureProps {
	feature: keyof FeatureFlags;
	on: ReactElement;
	off: ReactElement;
}

export const ToggleFeature = memo((props: ToggleFeatureProps) => {
	const { feature, off, on } = props;

	if (getFeatureFlag(feature)) {
		return on;
	}

	return off;
});
