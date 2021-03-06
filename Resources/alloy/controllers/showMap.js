function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, path: " + evt.annotation.path);
        if (evt.annotation && "rightButton" == evt.clicksource) {
            var showImage = Alloy.createController("showImage").getView("imageView");
            if (void 0 === Alloy.Globals.currentTab) {
                index = Alloy.createController("index");
                Alloy.Globals.currentTab = index.getView("showMapTab");
            }
            Alloy.Globals.path = evt.annotation.path;
            Alloy.Globals.currentTab.open(showImage);
        }
    }
    function showMap() {
        Titanium.Geolocation.purpose = "サンプル";
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (!e.success || e.error) {
                alert("位置情報が取得できませんでした");
                return;
            }
            latitude = e.coords.latitude;
            longitude = e.coords.longitude;
            var photos = Alloy.Collections.photo;
            Ti.API.info("/////// fetch() ////////");
            photos.fetch();
            var _insertAnnotation = function(photo) {
                var createAnnotation = Ti.Map.createAnnotation({
                    latitude: photo.get("latitude"),
                    longitude: photo.get("longitude"),
                    pincolor: Titanium.Map.ANNOTATION_GREEN,
                    animate: true,
                    title: photo.get("memo"),
                    leftView: Ti.UI.createImageView({
                        image: photo.get("path"),
                        width: 32,
                        height: 32
                    }),
                    rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE,
                    path: photo.get("path")
                });
                $.mapview.addAnnotation(createAnnotation);
            };
            photos.map(_insertAnnotation);
            Ti.App.addEventListener("app:update", function(event) {
                var createAnnotation = Ti.Map.createAnnotation({
                    latitude: event.photo.attributes.latitude,
                    longitude: event.photo.attributes.longitude,
                    pincolor: Titanium.Map.ANNOTATION_GREEN,
                    animate: true,
                    title: event.photo.attributes.memo,
                    leftView: Ti.UI.createImageView({
                        image: event.photo.attributes.path,
                        width: 32,
                        height: 32
                    }),
                    rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE,
                    path: event.photo.attributes.path
                });
                $.mapview.addAnnotation(createAnnotation);
            });
            $.mapview.setLocation({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: .01,
                longitudeDelta: .01
            });
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "showMap";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.map = Ti.UI.createWindow({
        id: "map",
        title: "現在地"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    showMap ? $.__views.map.addEventListener("open", showMap) : __defers["$.__views.map!open!showMap"] = true;
    var __alloyId11 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId11,
        id: "mapview",
        ns: Ti.Map,
        userLocation: "true",
        mapType: Titanium.Map.STANDARD_TYPE,
        region: "{latitude:40.0, longitude:130, latitudeDelta:30, longitudeDelta:30}",
        animate: "true",
        regionFit: "true"
    });
    $.__views.map.add($.__views.mapview);
    report ? $.__views.mapview.addEventListener("click", report) : __defers["$.__views.mapview!click!report"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.map.open();
    $.map.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.map!open!showMap"] && $.__views.map.addEventListener("open", showMap);
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;