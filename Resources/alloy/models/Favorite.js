exports.definition = {
    config: {
        columns: {
            name: "text",
            address: "text",
            tel: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "favorite"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("name" == key && 0 >= value.length) return "No name!";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("favorite", exports.definition, []);

collection = Alloy.C("favorite", exports.definition, model);

exports.Model = model;

exports.Collection = collection;