var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.photo = Alloy.createCollection("photo");

Alloy.Collections.favorite = Alloy.createCollection("favorite");

Alloy.createController("index");