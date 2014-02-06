function tabOpen(e) {
	Alloy.Globals.currentTab = e.activeTab;
}

function tabFocus(e) {
	Alloy.Globals.currentTab = e.Tab;
}

$.indexTab.open();

$.indexTab.addEventListener('close', function() {
    $.destroy();
});