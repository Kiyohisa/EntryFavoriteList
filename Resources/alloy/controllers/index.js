function Controller() {
    function tabOpen(e) {
        Alloy.Globals.currentTab = e.activeTab;
    }
    function tabFocus(e) {
        Alloy.Globals.currentTab = e.Tab;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.indexTab = Ti.UI.createTabGroup({
        id: "indexTab"
    });
    $.__views.__alloyId9 = Alloy.createController("showMap", {
        id: "__alloyId9"
    });
    $.__views.showMapTab = Ti.UI.createTab({
        window: $.__views.__alloyId9.getViewEx({
            recurse: true
        }),
        title: "Home",
        id: "showMapTab",
        icon: "dark_flag.png"
    });
    $.__views.indexTab.addTab($.__views.showMapTab);
    $.__views.__alloyId10 = Alloy.createController("entry", {
        id: "__alloyId10"
    });
    $.__views.showTakePict = Ti.UI.createTab({
        window: $.__views.__alloyId10.getViewEx({
            recurse: true
        }),
        title: "takePicture",
        id: "showTakePict",
        icon: "dark_camera.png"
    });
    $.__views.indexTab.addTab($.__views.showTakePict);
    $.__views.indexTab && $.addTopLevelView($.__views.indexTab);
    tabOpen ? $.__views.indexTab.addEventListener("open", tabOpen) : __defers["$.__views.indexTab!open!tabOpen"] = true;
    tabFocus ? $.__views.indexTab.addEventListener("focus", tabFocus) : __defers["$.__views.indexTab!focus!tabFocus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.indexTab.open();
    $.indexTab.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.indexTab!open!tabOpen"] && $.__views.indexTab.addEventListener("open", tabOpen);
    __defers["$.__views.indexTab!focus!tabFocus"] && $.__views.indexTab.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;