var Timer = function(){
    {
        if (compteur == 24) {
            compteur = 0;
            jour ++;
            console.log(restaurant1.getInfo(),restaurant2.getInfo(),restaurant3.getInfo());
            console.log("Nombre de clients de la journée au Vesuvio: " +restaurant1.nbr_client+"\n",
                "Nombre de clients de la journée au Sakura: "+restaurant2.nbr_client+"\n",
                "Nombre de clients de la journée au Buffalo: "+restaurant3.nbr_client+"\n");
            restaurant1.nbr_client=0;
            restaurant2.nbr_client=0;
            restaurant3.nbr_client=0;

        }
        else if(jour == 3){
            clearInterval(timer);
        }
        else {


            verifFerme(restaurant1);
            verifFerme(restaurant2);
            verifFerme(restaurant3);
            restock(restaurant1);
            restock(restaurant2);
            restock(restaurant3);
            console.log ("\n"+"jour " +jour);
            console.log("Il est " +compteur +" heure");
            compteur = compteur + 1;


        }
    }
};

restock=function(resto){
if (compteur>= Rungis.ouverture && compteur <= Rungis.fermeture && resto.ferme == true) {
    resto.ingredient1 = stock;
    resto.ingredient2 = stock;
    resto.ingredient3 = stock;
    resto.ingredient4 = stock;
    resto.ingredient5 = stock;
    resto.ingredient6 = stock;
}
};

verifFerme = function(resto){
    if (compteur == resto.ouverture){
        resto.ferme=false;
        console.log(resto.nom +" ouvre! ")
    }
    else if (compteur == resto.fermeture && resto.ferme == false){

        resto.ferme=true;
        console.log(resto.nom +" ferme! ")
    }

};

var compteur=0;
var jour=1;
console.log("jour " +jour +"\n");
const timer = setInterval(Timer,1000);