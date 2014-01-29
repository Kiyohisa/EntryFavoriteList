function tabClose(){
	$.destroy();
}

function takePicture(){
	Ti.Media.showCamera({
		success:function(evt){
                var cropRect = evt.cropRect;
                var image = evt.media;
                if(evt.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
                	Ti.Geolocation.getCurrentPosition(
                	function(e){
	 					var now = (new Date).getTime;
	 					var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory
	 						,String.format("%d-%d", now, Math.floor(Math.random() * 1000)));
	 					file.write(evt.media);
	 					var savePhoto = {
						    path: file.nativePath,
						    latitude: e.coords.latitude,
						    longitude: e.coords.longitude
	 					};
	 					var photo = Alloy.createModel("photo", savePhoto);
	 					photo.save();
	 					Alloy.Collections.photo.fetch();
                		
                		Ti.App.fireEvent('app:update', photo);
                	}
                	);

                }
                else
                {
                    alert("got the wrong type back ="+evt.mediaType);
                    
                }
		},
		cancel:function(){
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
		},
		saveToPhotoGallery:true,
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	}
	);
}
// $.takePicture = tabClose();
// $.takePicture = takePicture;

$.takePicture.open();
