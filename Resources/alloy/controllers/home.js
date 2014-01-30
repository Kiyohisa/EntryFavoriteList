function Controller() {
    function __alloyId10() {
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId4.__transform["alloy_id"] ? __alloyId4.__transform["alloy_id"] : __alloyId4.get("alloy_id")
            });
            rows.push(__alloyId5);
            var __alloyId6 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId5.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId4.__transform["latitude"] ? __alloyId4.__transform["latitude"] : __alloyId4.get("latitude")
            });
            __alloyId6.add(__alloyId7);
            var __alloyId8 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId4.__transform["longitude"] ? __alloyId4.__transform["longitude"] : __alloyId4.get("longitude")
            });
            __alloyId6.add(__alloyId8);
        }
        $.__views.favorites.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.home = Ti.UI.createWindow({
        title: "Home",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.favorites = Ti.UI.createTableView({
        id: "favorites"
    });
    $.__views.home.add($.__views.favorites);
    var __alloyId9 = Alloy.Collections["photo"] || photo;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;