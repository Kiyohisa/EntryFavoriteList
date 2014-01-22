function addLocate(){
	//alert('addLocate!');
	Ti.Media.showCamera({
		success:function(evt){
                var cropRect = event.cropRect;
                var image = event.media;
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                        // カメラで撮った画像を表示する
                        var imageView = Ti.UI.createImageView({
                                width:win.width,
                                height:win.height,
                                image:event.media
                        });
                        //win.add(imageView);

                }
                else
                {
                        alert("got the wrong type back ="+event.mediaType);
                }			
		},
		cancel:function(){
			
		},
		error:function(){
                // create alert
                var a = Titanium.UI.createAlertDialog({title:'Camera'});

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
$.addLocate = addLocate;