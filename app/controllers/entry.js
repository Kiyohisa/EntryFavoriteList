function blurTextArea() {
  $.inputName.blur();
}
function takePicture() {
  // alert("take Picture!");
  
  var favorite = Alloy.createModel("favorite",{
  	name: $.inputName.value
  	// , address: $.inputAddress.value
  	// , tel: $.inputTel.value
  });
  if(favorite.isValid()){
	  favorite.save();
	  Alloy.Collections.favorite.fetch();
	  var takePict = Alloy.createController("takePicture").getView("takePicture");
	  // var win = Ti.UI.createWindow();
	  // win.add(takePict);
	  // win.open();
	  if (Alloy.Globals.currentTab === undefined) {
	    index = Alloy.createController("index");
	    Alloy.Globals.currentTab = index.getView("showTakePict");
	  }
	Alloy.Globals.currentTab.open(takePict);
  	
  }else{
	favorite.destroy();  	
  }
}