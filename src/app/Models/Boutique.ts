export class Boutique
{
  nom: String;
  etablissement: String;
   constructor(nom: String,etablissement: String)
   {
    this.nom = nom;
    this.etablissement = etablissement;
   }
   ToJson()
   {
    return { "nom": this.nom, "etablissement": this.etablissement};
   }
}
