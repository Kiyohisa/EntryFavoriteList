function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " +evt.annotation.myid);
}

function showMap(){
Titanium.Geolocation.purpose = 'サンプル';
Titanium.Geolocation.getCurrentPosition(
    function(e) {
        if (!e.success || e.error){
            alert('位置情報が取得できませんでした');
            return;
        }

        latitude = e.coords.latitude;
        longitude = e.coords.longitude;

		var photos = Alloy.createCollection('photo');
		// alert(locations);
		Ti.API.info("/////// fetch() ////////");
		photos.fetch();
		var data = [];
		photos.map(function(photo){
			var createAnnotation = Ti.Map.createAnnotation({
				latitude:photo.get('latitude')
				,longitude:photo.get('longitude')
				,pincolor:Titanium.Map.ANNOTATION_GREEN
				,animate:true
			});
			alert(createAnnotation);
			data.push(createAnnotation);
        	// $.mapview.addAnnotations([createAnnotation]);			
		}
		);
        // ピンを立てる
         // var currentPos = Titanium.Map.createAnnotation({
             // latitude:latitude,
             // longitude:longitude,
             // title:"現在地",
             // pincolor:Titanium.Map.ANNOTATION_GREEN,
             // animate:true
         // });        
        $.mapview.addAnnotations(data);
//         
        //$.mapview.show(); // 隠していた地図を表示する
        $.mapview.setLocation({   // 現在地まで地図をスクロールする
            latitude:latitude,
            longitude:longitude,
            latitudeDelta:0.01,
            longitudeDelta:0.01
        });
    }
);
};
$.map.open();
