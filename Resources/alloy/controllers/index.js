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
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Alloy.createController("home", {
        id: "__alloyId2"
    });
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.__alloyId2.getViewEx({
            recurse: true
        }),
        title: "Home",
        id: "homeTab",
        icon: "dark_book.png"
    });
    $.__views.index.addTab($.__views.homeTab);
    $.__views.__alloyId4 = Alloy.createController("showMap", {
        id: "__alloyId4"
    });
    $.__views.showMapTab = Ti.UI.createTab({
        window: $.__views.__alloyId4.getViewEx({
            recurse: true
        }),
        title: "showMap",
        id: "showMapTab",
        icon: "dark_flag.png"
    });
    $.__views.index.addTab($.__views.showMapTab);
    $.__views.index && $.addTopLevelView($.__views.index);
    tabOpen ? $.__views.index.addEventListener("open", tabOpen) : __defers["$.__views.index!open!tabOpen"] = true;
    tabFocus ? $.__views.index.addEventListener("focus", tabFocus) : __defers["$.__views.index!focus!tabFocus"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.index!open!tabOpen"] && $.__views.index.addEventListener("open", tabOpen);
    __defers["$.__views.index!focus!tabFocus"] && $.__views.index.addEventListener("focus", tabFocus);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;