exports.definition = {
	config: {
		columns: {
		    "name": "text",
		    "address": "text",
		    "tel": "text",
		},
		adapter: {
			type: "sql",
			collection_name: "favorite"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			validate: function (attrs) {
				for(var key in attrs) {
					var value = attrs[key];
					if(key == "name") {
						if(value.length <= 0){
							return "No name!";
						}
					}
					
				}
			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};