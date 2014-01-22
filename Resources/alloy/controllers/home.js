function Controller() {
    function addLocate() {
        Ti.Media.showCamera({
            success: function() {
                event.cropRect;
                event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO ? Ti.UI.createImageView({
                    width: win.width,
                    height: win.height,
                    image: event.media
                }) : alert("got the wrong type back =" + event.mediaType);
            },
            cancel: function() {},
            error: function() {
                var a = Titanium.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_VIDEO, Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        title: "Home",
        id: "home"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.addButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.CAMERA,
        title: "Add",
        id: "addButton"
    });
    addLocate ? $.__views.addButton.addEventListener("click", addLocate) : __defers["$.__views.addButton!click!addLocate"] = true;
    $.__views.home.rightNavButton = $.__views.addButton;
    $.__views.favorites = Ti.UI.createTableView({
        id: "favorites"
    });
    $.__views.home.add($.__views.favorites);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.addLocate = addLocate;
    __defers["$.__views.addButton!click!addLocate"] && $.__views.addButton.addEventListener("click", addLocate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;