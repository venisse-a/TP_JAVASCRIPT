/**
 * Created by Tony on 21/03/2016.
 */
const stock = 100;


function Restaurant(nom,recette1,recette2,recette3,ouverture,fermeture,ferme) {
    this.nbr_client = 0;
    this.nom = nom;
    this.recette1 = recette1;
    this.recette2 = recette2;
    this.recette3 = recette3;
    this.ouverture = ouverture;
    this.fermeture = fermeture;
    this.ferme = ferme;
    this.points = 0;

    this.cuisiner = function (recette) {
        if (this.nom == 'Vesuvio') {
            switch (recette) {
                case 1:
                    this.ingredient1--;
                    this.ingredient2--;
                    this.ingredient3--;
                    break;
                case 2:
                    this.ingredient1--;
                    this.ingredient3--;
                    this.ingredient4--;
                    break;
                case 3:
                    this.ingredient2--;
                    this.ingredient5--;
                    this.ingredient6--;
                    break;
                default:
                    break;
            }

        }
        else if (this.nom == 'Sakura') {
            switch (recette) {
                case 1:
                    this.ingredient1--;
                    this.ingredient4--;
                    this.ingredient5--;
                    break;
                case 2:
                    this.ingredient1--;
                    this.ingredient2--;
                    this.ingredient5--;
                    break;
                case 3:
                    this.ingredient2--;
                    this.ingredient3--;
                    this.ingredient6--;
                    break;
                default:
                    break;
            }
        }
        else if (this.nom == 'Buffalo') {
            switch (recette) {
                case 1:
                    this.ingredient4--;
                    this.ingredient5--;
                    this.ingredient6--;
                    break;
                case 2:
                    this.ingredient1--;
                    this.ingredient3--;
                    this.ingredient6--;
                    break;
                case 3:
                    this.ingredient2--;
                    this.ingredient4--;
                    this.ingredient5--;
                    break;
                default:
                    break;
            }
        }
        this.nbr_client++;
    };

    this.verifStock = function (recette) {
        if (this.nom == 'Vesuvio') {
            switch (recette) {
                case 1:
                    return (this.ingredient1 > 0 && this.ingredient2 > 0 && this.ingredient3 > 0);
                    break;
                case 2:
                    return (this.ingredient1 > 0 && this.ingredient3 > 0 && this.ingredient4 > 0);
                    break;
                case 3:
                    return (this.ingredient2 > 0 && this.ingredient5 > 0 && this.ingredient6 > 0);
                    break;
                default:
                    break;
            }
        }
        else if (this.nom == 'Sakura') {
            switch (recette) {
                case 1:
                    return (this.ingredient1 > 0 && this.ingredient4 > 0 && this.ingredient5 > 0);
                    break;
                case 2:
                    return (this.ingredient1 > 0 && this.ingredient2 > 0 && this.ingredient5 > 0);
                    break;
                case 3:
                    return (this.ingredient2 > 0 && this.ingredient3 > 0 && this.ingredient6 > 0);
                    break;
                default:
                    break;
            }
        }
        else if (this.nom == 'Buffalo') {
            switch (recette) {
                case 1:
                    return (this.ingredient4 > 0 && this.ingredient5 > 0 && this.ingredient6 > 0);
                    break;
                case 2:
                    return (this.ingredient1 > 0 && this.ingredient3 > 0 && this.ingredient6 > 0);
                    break;
                case 3:
                    return (this.ingredient1 > 0 && this.ingredient4 > 0 && this.ingredient5 > 0);
                    break;
                default:
                    break;
            }
        }
    };

    this.getInfo = function () {
        return this.nom + ' ' + this.recette1 + ' ' + this.recette2 + ' ' + this.recette3
            + "\n" + " ingrédient 1 : " + this.ingredient1 + "\n" + " ingrédient 2 : " + this.ingredient2 + "\n" +
            " ingrédient 3 : " + this.ingredient3 + "\n" + " ingrédient 4 : " + this.ingredient4 + "\n"
            + " ingrédient 5 : " + this.ingredient5 + "\n" + " ingrédient 6 : " + this.ingredient6 + "\n" + "\n";
    };
    this.getPoints = function () {
        console.log("nombre de points du "+this.nom+": "+this.points + "\n");
    };
}

var restaurant1=new Restaurant("Vesuvio","Pizza","Pates","Salades",11,23,true);
var restaurant2=new Restaurant("Sakura","Sushi","Maki","Brochette",9,20,true);
var restaurant3=new Restaurant("Buffalo","Steak","Burger","Ribs",10,22,true);
