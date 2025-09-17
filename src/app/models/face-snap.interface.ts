import { SnapType } from "./snap-type.type";

export class FaceSnapInterface {

  location?: string; //  propriéte optionnelle aux classses. Cette propriété peut ne pas avoir de valeur
  id:string; //Pour identifiee nos proprietes

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {

  this.id = crypto.randomUUID().substring (0,8);/* universally unique identifier */
  // substring c'est pour lui demander 8 caractères pour le code généré
console.log(this);  
}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType : SnapType){ // SnapType Pour tel type de snap j'ai une action
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap'){
      this.removeSnap();
    }
    }
  
  setlocation(location:string):void{ // Nouvelle méthode pour permettre d'ajouter une localisation
    this.location = location;
  }

  withLocation(location:string):FaceSnapInterface { /* va retourner le faceSnap modifié */
    this.setlocation(location);
    return this;
  }

}