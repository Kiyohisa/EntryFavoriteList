function Controller() {
    function __alloyId7() {
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId1 = models[i];
            __alloyId1.__transform = {};
            var __alloyId2 = Ti.UI.createTableViewRow({
                _id: "undefined" != typeof __alloyId1.__transform["alloy_id"] ? __alloyId1.__transform["alloy_id"] : __alloyId1.get("alloy_id")
            });
            rows.push(__alloyId2);
            var __alloyId3 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                top: "6dp",
                right: "11dp",
                bottom: "6dp",
                left: "11dp",
                layout: "horizontal"
            });
            __alloyId2.add(__alloyId3);
            var __alloyId4 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId1.__transform["latitude"] ? __alloyId1.__transform["latitude"] : __alloyId1.get("latitude")
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createLabel({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                textAlign: "left",
                text: "undefined" != typeof __alloyId1.__transform["longitude"] ? __alloyId1.__transform["longitude"] : __alloyId1.get("longitude")
            });
            __alloyId3.add(__alloyId5);
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
    var __alloyId6 = Alloy.Collections["photo"] || photo;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;