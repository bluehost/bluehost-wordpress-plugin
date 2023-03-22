/**
 * Returns whether or not tips are globally enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether tips are globally enabled.
 */
export function getActivePage(state) {
	return state.app.activePage;
}

export function getTopLevelPages(state) {
	return state.app.pages;
}

export function isMenuAugmented(state) {
	return state.app.isWPMenuAugmented;
}

export function isSidebarOpen(state) {
	return state.app.isSidebarOpen;
}

export function isTopLevel(state) {
	return state.app.isTopLevel;
}

export function getEcommerceCapabilities(state) {
	let capabilities = new Set();
	// TODO: Check WC install/activation date for cutoff
	let isAfterCutOffDate = new Date(state.app.customer.signup_date) >= new Date('2022-08-18T15:30:00.000Z');
	let planSubtype = state.app.customer.plan_subtype
	let isOnECommercePlan = ["wc_standard", "wc_premium"].includes(
		planSubtype
	);
	if (planSubtype === "wc_standard") {
		capabilities.add("standard");
	}
	if (planSubtype === "wc_premium") {
		capabilities.add("premium");
	}
	if (isOnECommercePlan) {
		if (isAfterCutOffDate) {
			capabilities.add("product");
			capabilities.add("experience");
		} else {
			capabilities.add("upgrade");
		}
	} else if (isWooActive(state)) {
		capabilities.add("minimal");
		capabilities.add("experience");
	} else {
		capabilities.add("upgrade");
	}
	return capabilities;
}

export function getAllSettings(state) {
	return state.settings;
}

export function getSetting(state, setting) {
	return state.settings[setting];
}

export function isWooActive(state) {
	return state.wp.isWooActive;
}

export function isJetpackActive(state) {
	return state.wp.isJetpackActive;
}

export function getWP(state) {
	return state.wp;
}

export function getBluehostData(state) {
	return state;
}

export function getAdminUrl(state) {
	return state.app.adminUrl;
}

export function getBluehostPluginDaysSinceInstall(state) {
	return state.wp.bluehostPluginDaysSinceInstall;
}
