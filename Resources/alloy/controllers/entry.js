function Controller() {
    function blurTextArea() {
        $.inputName.blur();
    }
    function takePicture() {
        var favorite = Alloy.createModel("favorite", {
            name: $.inputName.value
        });
        if (favorite.isValid()) {
            favorite.save();
            Alloy.Collections.favorite.fetch();
            var takePict = Alloy.createController("takePicture").getView("takePicture");
            if (void 0 === Alloy.Globals.currentTab) {
                index = Alloy.createController("index");
                Alloy.Globals.currentTab = index.getView("showTakePict");
            }
            Alloy.Globals.currentTab.open(takePict);
        } else favorite.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "entry";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.entry = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        id: "entry",
        title: "Entry"
    });
    $.__views.entry && $.addTopLevelView($.__views.entry);
    $.__views.addWrap = Ti.UI.createScrollView({
        id: "addWrap",
        layout: "vertical"
    });
    $.__views.entry.add($.__views.addWrap);
    blurTextArea ? $.__views.addWrap.addEventListener("click", blurTextArea) : __defers["$.__views.addWrap!click!blurTextArea"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: "16sp",
            fontWeight: "bold"
        },
        textAlign: "left",
        color: "#333333",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        text: "memo",
        id: "__alloyId0"
    });
    $.__views.addWrap.add($.__views.__alloyId0);
    $.__views.inputName = Ti.UI.createTextArea({
        font: {
            fontSize: "16sp"
        },
        width: Ti.UI.FILL,
        height: "96dp",
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        borderWidth: 1,
        borderColor: "#CCCCCC",
        id: "inputName"
    });
    $.__views.addWrap.add($.__views.inputName);
    $.__views.takePicture = Ti.UI.createButton({
        width: Ti.UI.FILL,
        top: "11dp",
        bottom: "11dp",
        left: "11dp",
        right: "11dp",
        height: "44dp",
        id: "takePicture",
        title: "撮影する"
    });
    $.__views.addWrap.add($.__views.takePicture);
    takePicture ? $.__views.takePicture.addEventListener("click", takePicture) : __defers["$.__views.takePicture!click!takePicture"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.addWrap!click!blurTextArea"] && $.__views.addWrap.addEventListener("click", blurTextArea);
    __defers["$.__views.takePicture!click!takePicture"] && $.__views.takePicture.addEventListener("click", takePicture);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;