/**
 * Created by Tony on 29/03/2016.
 */
function Market(nom,ouverture,fermeture)
{
    this.nom=nom;
    this.ouverture=ouverture;
    this.fermeture=fermeture;


    this.getInfo=function()
    {
        return this.nom;
    }
}

var Rungis = new Market("Rungis",4,11);