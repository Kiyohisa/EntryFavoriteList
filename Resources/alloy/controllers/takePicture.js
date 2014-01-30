function Controller() {
    function __alloyId25() {
        __alloyId25.opts || {};
        var models = __alloyId24.models;
        var len = models.length;
        var children = $.__views.scroll.children;
        for (var d = children.length - 1; d >= 0; d--) $.__views.scroll.remove(children[d]);
        for (var i = 0; len > i; i++) {
            var __alloyId21 = models[i];
            __alloyId21.__transform = {};
            var __alloyId23 = Alloy.createController("photo", {
                $model: __alloyId21,
                __parentSymbol: $.__views.scroll
            });
            __alloyId23.setParent($.__views.scroll);
        }
    }
    function tabClose() {
        $.destroy();
    }
    function takePicture() {
        Ti.Media.openPhotoGallery({
            success: function(evt) {
                evt.cropRect;
                evt.media;
                if (evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
                    Ti.Geolocation.getCurrentPosition(function(e) {
                        var now = new Date().getTime;
                        var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, String.format("%d-%d", now, Math.floor(1e3 * Math.random())));
                        file.write(evt.media);
                        var savePhoto = {
                            path: file.nativePath,
                            latitude: e.coords.latitude,
                            longitude: e.coords.longitude
                        };
                        var photo = Alloy.createModel("photo", savePhoto);
                        photo.save();
                        Alloy.Collections.photo.fetch();
                        Ti.API.info({
                            photo: photo
                        });
                        Ti.App.fireEvent("app:update", {
                            photo: photo
                        });
                    });
                } else alert("got the wrong type back =" + evt.mediaType);
            },
            cancel: function() {},
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
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
    this.__controllerPath = "takePicture";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("photo");
    $.__views.takePicture = Ti.UI.createWindow({
        id: "takePicture",
        title: "Take Picture"
    });
    $.__views.takePicture && $.addTopLevelView($.__views.takePicture);
    tabClose ? $.__views.takePicture.addEventListener("close", tabClose) : __defers["$.__views.takePicture!close!tabClose"] = true;
    $.__views.takeButton = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.CAMERA,
        title: "takePic",
        id: "takeButton"
    });
    takePicture ? $.__views.takeButton.addEventListener("click", takePicture) : __defers["$.__views.takeButton!click!takePicture"] = true;
    $.__views.takePicture.rightNavButton = $.__views.takeButton;
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll"
    });
    $.__views.takePicture.add($.__views.scroll);
    var __alloyId24 = Alloy.Collections["photo"] || photo;
    __alloyId24.on("fetch destroy change add remove reset", __alloyId25);
    exports.destroy = function() {
        __alloyId24.off("fetch destroy change add remove reset", __alloyId25);
    };
    _.extend($, $.__views);
    $.takePicture.open();
    __defers["$.__views.takePicture!close!tabClose"] && $.__views.takePicture.addEventListener("close", tabClose);
    __defers["$.__views.takeButton!click!takePicture"] && $.__views.takeButton.addEventListener("click", takePicture);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;