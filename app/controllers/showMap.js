function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, path: " +evt.annotation.path);
	
	if (evt.annotation && evt.clicksource == "rightButton") {
		// var win = app.ui.photo.createPhotoWindow(evt.annotation.photo.path);
		// win.open();
	  var showImage = Alloy.createController("showImage").getView("imageView");
	  if (Alloy.Globals.currentTab === undefined) {
	    index = Alloy.createController("index");
	    Alloy.Globals.currentTab = index.getView("showMapTab");
	  }
	  Alloy.Globals.path = evt.annotation.path;
	　Alloy.Globals.currentTab.open(showImage);
	};
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
					,title: photo.get('memo')
					,leftView: Ti.UI.createImageView({image: photo.get('path'), width:32, height:32})
					,rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE
					,path: photo.get('path')
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
					,title: event.photo.attributes.memo
					,leftView: Ti.UI.createImageView({image: event.photo.attributes.path, width:32, height:32})
					,rightButton: Ti.UI.iPhone.SystemButton.DISCLOSURE
					,path: event.photo.attributes.path			
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

$.map.addEventListener('close', function() {
    $.destroy();
});
