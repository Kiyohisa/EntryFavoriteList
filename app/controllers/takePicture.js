function tabClose(){
	$.destroy();
}

function takePicture(){
	//Ti.Media.openPhotoGallery({
	Ti.Media.showCamera({
		success:function(evt){
                if(evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
                	Ti.Geolocation.getCurrentPosition(
                	function(e){
	 					var now = (new Date).getTime;
	 					var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory
	 						,String.format("%d-%d", now, Math.floor(Math.random() * 1000)));
	 					file.write(evt.media);
	 					// var favorites = Alloy.Collections.favorite.fetch({
	 						// query: 'SELECT * FROM favorite'
	 					// });
	 					//var favorites = Alloy.Collections.favorite;
	 					var favorites = Alloy.createCollection('favorite');
	 					favorites.fetch();
	 					// alert("favorites.length "+favorites.length);
						var favorite = favorites.at(favorites.length-1);	 					
	 					var savePhoto = {
						    path: file.nativePath,
						    latitude: e.coords.latitude,
						    longitude: e.coords.longitude,
						    memo: favorite.get('name')
	 					};
	 					var photo = Alloy.createModel("photo", savePhoto);
	 					photo.save();
	 					// Alloy.Collections.photo.fetch();
                		
                		Ti.API.info({photo: photo});
		                Ti.Media.hideCamera();
                		
                		Ti.App.fireEvent('app:update', {photo: photo});
						$.takePicture.close();
						          		
                	}
                	);

                }
                else
                {
                    alert("got the wrong type back ="+evt.mediaType);
                    
                }
		},
		cancel:function(){
                var win = Ti.UI.createWindow();
				win.close();
		},
		error:function(error){
                // create alert
                var a = Ti.UI.createAlertDialog({title:'Camera'});
                // set message
                if (error.code == Titanium.Media.NO_CAMERA)
                {
                        a.setMessage('Please run this test on device');
                }
                else
                {
                        a.setMessage('Unexpected error: ' + error.code);
                }
                // show alert
                a.show();
                var win = Ti.UI.createWindow();
				win.close();
		},
		saveToPhotoGallery:true,
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]

	}
	);
}

$.takePicture.open();
