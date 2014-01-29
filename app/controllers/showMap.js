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
			
			// アノテーションを配置
			var _insertAnnotation = function(photo){
				alert('photo'+photo);
				photos.map(function(photo){
					var createAnnotation = Ti.Map.createAnnotation({
						latitude:photo.get('latitude')
						,longitude:photo.get('longitude')
						,pincolor:Titanium.Map.ANNOTATION_GREEN
						,animate:true
					});
					// alert(createAnnotation);
					data.push(createAnnotation);
				}
				);
		        $.mapview.addAnnotations(data);
			};
			
			photos.map(_insertAnnotation);
			// photos.map(function(photo){
				// var createAnnotation = Ti.Map.createAnnotation({
					// latitude:photo.get('latitude')
					// ,longitude:photo.get('longitude')
					// ,pincolor:Titanium.Map.ANNOTATION_GREEN
					// ,animate:true
				// });
				// // alert(createAnnotation);
				// data.push(createAnnotation);
			// }
			// );
	        // $.mapview.addAnnotations(data);
	        
	        Ti.App.addEventListener('app:update',function(event){
				//alert('app:update'+event.photo);
				var photos = Alloy.createCollection('photo');
				// alert(locations);
				Ti.API.info("/////// fetch() ////////");
				photos.fetch();
				
	        	_insertAnnotation;
	        });
	        
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
