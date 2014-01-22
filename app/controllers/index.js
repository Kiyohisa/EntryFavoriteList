function tabOpen(e) {
	Alloy.Globals.currentTab = e.activeTab;
}

function tabFocus(e) {
	Alloy.Globals.currentTab = e.Tab;
}

$.index.open();
