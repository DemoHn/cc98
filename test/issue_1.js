var _98 = require("../lib/basic");
var uc = require("./user_config");

var cc98 = new _98(uc);

cc98.login(function(){
    cc98.getPostInfo(357,4411365,1,1,function(data){
        console.log(data[1].list);
    });
})
