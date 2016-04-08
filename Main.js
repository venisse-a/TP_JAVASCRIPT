/**
 * Created by Tony on 29/03/2016.
 */
const fs = require("fs");
const vm = require('vm');
vm.runInThisContext(fs.readFileSync("C:/Users/Tony/Downloads/sample_project" + "/Client.js"));
vm.runInThisContext(fs.readFileSync("C:/Users/Tony/Downloads/sample_project" + "/Restaurant.js"));
vm.runInThisContext(fs.readFileSync("C:/Users/Tony/Downloads/sample_project" + "/Timer.js"));
vm.runInThisContext(fs.readFileSync("C:/Users/Tony/Downloads/sample_project" + "/Marche.js"));



var Main = function(){
    if(compteur > 7) {
        var a = Math.ceil(50 * Math.random());
        console.log("Il y a " + a + " nouveaux clients");
        for (var i = 0; i < a; i++) {
            var C = new Client();
            C.manger_resto();
        }
    }

    else if (jour == 3){
        restaurant1.getPoints();
        restaurant2.getPoints();
        restaurant3.getPoints();
        clearInterval(newclient)
    }

};

var newclient = setInterval(Main, 1000);

