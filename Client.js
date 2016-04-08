/**
 * Created by Tony on 29/03/2016.
 */
var fin = false;

function Client() {

    this.choix_recette = 0;
    this.choix_resto = 0;
    this.tps_attente = 0;

    this.rand = function () {
        return Math.ceil(3 * Math.random());
    };
    this.set_recette = function () {
        this.choix_recette = this.rand()
    };
    this.set_resto = function () {
        var a = this.rand();
        //console.log(a);
        switch (a) {
            case 1:
                this.choix_resto = restaurant1;
                break;
            case 2:
                this.choix_resto = restaurant2;
                break;
            case 3:
                this.choix_resto = restaurant3;
                break;
        }
    };
    this.changer = function (recette) {
        switch (recette) {
            case 1:
                this.choix_recette = 2;
                break;
            case 2:
                this.choix_recette = 3;
                break;
            case 3:
                this.choix_recette = 1;
                break;
        }
    };
    this.changer_resto = function (resto){
        switch (resto) {
            case restaurant1:
                this.choix_resto = restaurant2;
                break;
            case restaurant2:
                this.choix_resto = restaurant3;
                break;
            case restaurant3:
                this.choix_resto = restaurant1;
                break;
        }
        this.tps_attente = this.tps_attente + 10;
    };
    this.attendre_plat = function() {
        this.tps_attente = this.tps_attente + Math.ceil(45 * Math.random()) + 5;
    };
    this.manger = function (resto) {

        if (resto.verifStock(this.choix_recette) == true) {
            resto.cuisiner(this.choix_recette);
            this.attendre_plat();
        }
        else {
            this.changer(this.choix_recette);
            if (resto.verifStock(this.choix_recette) == true) {
                resto.cuisiner(this.choix_recette);
                this.attendre_plat();
            }
            else {
                this.changer(this.choix_recette);
                if (resto.verifStock(this.choix_recette) == true) {
                    resto.cuisiner(this.choix_recette)
                    this.attendre_plat();
                }
                else {
                    resto.ferme = true;
                    console.log(resto.nom +" ferme pour manque de provisions");
                }
            }
        }

    };
    this.manger_resto = function(){
        this.set_resto();
        this.set_recette();

        if (this.choix_resto.ferme != true) {
            this.manger(this.choix_resto);
            this.attrib_points(this.choix_resto);
        }
        else {
            this.changer_resto(this.choix_resto);
            if (this.choix_resto.ferme != true) {
                this.manger(this.choix_resto);
                this.attrib_points(this.choix_resto);
            }
            else{
                this.changer_resto(this.choix_resto);
                if (this.choix_resto.ferme != true) {
                    this.manger(this.choix_resto);
                    this.attrib_points(this.choix_resto);
                }
                else {
                    fin = true;
                }
            }

        }
    };
    this.attrib_points = function(resto){
        if (this.tps_attente<10){
            resto.points += 2;
        }
        else if(this.tps_attente >=10 && this.tps_attente<45){
            resto.points += 1;
        }
    }
}

