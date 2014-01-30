function Controller() {
    function blurTextArea() {
        $.inputName.blur();
    }
    function takePicture() {
        var takePict;
        takePict = Alloy.createController("takePicture").getView();
        $.entry.add(takePict);
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
        text: "名前",
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
    $.__views.__alloyId1 = Ti.UI.createLabel({
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
        text: "住所",
        id: "__alloyId1"
    });
    $.__views.addWrap.add($.__views.__alloyId1);
    $.__views.inputAddress = Ti.UI.createTextArea({
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
        id: "inputAddress"
    });
    $.__views.addWrap.add($.__views.inputAddress);
    $.__views.__alloyId2 = Ti.UI.createLabel({
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
        text: "電話番号",
        id: "__alloyId2"
    });
    $.__views.addWrap.add($.__views.__alloyId2);
    $.__views.inputTel = Ti.UI.createTextArea({
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
        id: "inputTel"
    });
    $.__views.addWrap.add($.__views.inputTel);
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