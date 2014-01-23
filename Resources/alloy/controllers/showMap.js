function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
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
    var __alloyId14 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId14,
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
    Titanium.Geolocation.purpose = "サンプル";
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (!e.success || e.error) {
            alert("位置情報が取得できませんでした");
            return;
        }
        latitude = e.coords.latitude;
        longitude = e.coords.longitude;
        var currentPos = Titanium.Map.createAnnotation({
            latitude: latitude,
            longitude: longitude,
            title: "現在地",
            pincolor: Titanium.Map.ANNOTATION_GREEN,
            animate: true
        });
        $.mapview.addAnnotation(currentPos);
        $.mapview.setLocation({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        });
    });
    $.map.open();
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;