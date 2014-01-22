function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " +evt.annotation.myid);
}

Titanium.Geolocation.purpose = 'サンプル';
Titanium.Geolocation.getCurrentPosition(
    function(e) {
        if (!e.success || e.error){
            alert('位置情報が取得できませんでした');
            return;
        }

        latitude = e.coords.latitude;
        longitude = e.coords.longitude;

        // ピンを立てる
        // var currentPos = Titanium.Map.createAnnotation({
            // latitude:latitude,
            // longitude:longitude,
            // title:"現在地",
            // pincolor:Titanium.Map.ANNOTATION_GREEN,
            // animate:true
        // });        
        //$.mapview.addAnnotation(currentPos);
        
        //$.mapview.show(); // 隠していた地図を表示する
        $.mapview.setLocation({   // 現在地まで地図をスクロールする
            latitude:latitude,
            longitude:longitude,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        });
    }
);

$.map.open();