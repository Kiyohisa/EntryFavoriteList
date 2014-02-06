function Controller() {
    function __alloyId8() {
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId3 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId2.__transform["alloy_id"] ? __alloyId2.__transform["alloy_id"] : __alloyId2.get("alloy_id")
            });
            rows.push(__alloyId3);
            var __alloyId4 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId2.__transform["name"] ? __alloyId2.__transform["name"] : __alloyId2.get("name")
            });
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId2.__transform["address"] ? __alloyId2.__transform["address"] : __alloyId2.get("address")
            });
            __alloyId4.add(__alloyId6);
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
    var __alloyId7 = Alloy.Collections["favorite"] || favorite;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;