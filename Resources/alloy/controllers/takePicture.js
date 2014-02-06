function Controller() {
    function __alloyId18() {
        __alloyId18.opts || {};
        var models = __alloyId17.models;
        var len = models.length;
        var children = $.__views.scroll.children;
        for (var d = children.length - 1; d >= 0; d--) $.__views.scroll.remove(children[d]);
        for (var i = 0; len > i; i++) {
            var __alloyId14 = models[i];
            __alloyId14.__transform = {};
            var __alloyId16 = Alloy.createController("photo", {
                $model: __alloyId14,
                __parentSymbol: $.__views.scroll
            });
            __alloyId16.setParent($.__views.scroll);
        }
    }
    function takePicture() {
        Ti.Media.showCamera({
            success: function(evt) {
                if (evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
                    Ti.Geolocation.getCurrentPosition(function(e) {
                        var now = new Date().getTime;
                        var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, String.format("%d-%d", now, Math.floor(1e3 * Math.random())));
                        file.write(evt.media);
                        var favorites = Alloy.createCollection("favorite");
                        favorites.fetch();
                        var favorite = favorites.at(favorites.length - 1);
                        var savePhoto = {
                            path: file.nativePath,
                            latitude: e.coords.latitude,
                            longitude: e.coords.longitude,
                            memo: favorite.get("name")
                        };
                        var photo = Alloy.createModel("photo", savePhoto);
                        photo.save();
                        Ti.API.info({
                            photo: photo
                        });
                        Ti.Media.hideCamera();
                        Ti.App.fireEvent("app:update", {
                            photo: photo
                        });
                        $.takePicture.close();
                    });
                } else alert("got the wrong type back =" + evt.mediaType);
            },
            cancel: function() {
                var win = Ti.UI.createWindow();
                win.close();
            },
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
                    title: "Camera"
                });
                error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
                a.show();
                var win = Ti.UI.createWindow();
                win.close();
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
        title: "Take Picture",
        tabBarHidden: "true"
    });
    $.__views.takePicture && $.addTopLevelView($.__views.takePicture);
    takePicture ? $.__views.takePicture.addEventListener("open", takePicture) : __defers["$.__views.takePicture!open!takePicture"] = true;
    $.__views.scroll = Ti.UI.createScrollView({
        id: "scroll"
    });
    $.__views.takePicture.add($.__views.scroll);
    var __alloyId17 = Alloy.Collections["photo"] || photo;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
    exports.destroy = function() {
        __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
    };
    _.extend($, $.__views);
    $.takePicture.open();
    __defers["$.__views.takePicture!open!takePicture"] && $.__views.takePicture.addEventListener("open", takePicture);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;