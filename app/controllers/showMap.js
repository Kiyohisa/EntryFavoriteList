function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " +evt.annotation.myid);
	
	// if (evt.annotation && evt.clicksource == "rightButton") {
		// var win = app.ui.photo.createPhotoWindow(evt.annotation.photo.path);
		// win.open();
	// };
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

			var photos = Alloy.Collections.photo;
			// alert(locations);
			Ti.API.info("/////// fetch() ////////");
			photos.fetch();			
			// アノテーションを配置
			var _insertAnnotation = function(photo){
				var createAnnotation = Ti.Map.createAnnotation({
					latitude:photo.get('latitude')
					,longitude:photo.get('longitude')
					,pincolor:Titanium.Map.ANNOTATION_GREEN
					,animate:true
					,title: "test"
					,leftView: Ti.UI.createImageView({image: photo.get('path'), width:32, height:32})
					,rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE
					//,photo: photo
				});
				$.mapview.addAnnotation(createAnnotation);
			};
			
			photos.map(_insertAnnotation);
	        
	        Ti.App.addEventListener('app:update',function(event){
				var createAnnotation = Ti.Map.createAnnotation({
					latitude:event.photo.attributes.latitude
					,longitude:event.photo.attributes.longitude
					,pincolor:Titanium.Map.ANNOTATION_GREEN
					,animate:true
					,title: "test"
					,leftView: Ti.UI.createImageView({image: event.photo.attributes.path, width:32, height:32})
					,rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE
					//,photo: photo					
				});
				$.mapview.addAnnotation(createAnnotation);
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
