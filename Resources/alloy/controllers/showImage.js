function Controller() {
    function showImage() {
        var imagePath = Alloy.Globals.path;
        $.showPict.image = imagePath;
    }
    function showNavBar() {
        $.imageView.showNavBar();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "showImage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.imageView = Ti.UI.createWindow({
        backgroundColor: "#fff",
        barColor: "#000",
        translucent: true,
        navBarHidden: true,
        tabBarHidden: true,
        id: "imageView"
    });
    $.__views.imageView && $.addTopLevelView($.__views.imageView);
    showImage ? $.__views.imageView.addEventListener("open", showImage) : __defers["$.__views.imageView!open!showImage"] = true;
    showNavBar ? $.__views.imageView.addEventListener("click", showNavBar) : __defers["$.__views.imageView!click!showNavBar"] = true;
    $.__views.showPict = Ti.UI.createImageView({
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.Platform.displayCaps.platformHeight,
        id: "showPict"
    });
    $.__views.imageView.add($.__views.showPict);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.imageView!open!showImage"] && $.__views.imageView.addEventListener("open", showImage);
    __defers["$.__views.imageView!click!showNavBar"] && $.__views.imageView.addEventListener("click", showNavBar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;