import { LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {
	isAppRedesigned: localStorage.getItem(LAST_DESIGN_KEY) === 'new',
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
	if (newFeatureFlags) {
		featureFlags = newFeatureFlags;
	}
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
	return featureFlags[flag];
}

export function getAllFeatureFlags() {
	return featureFlags;
}
