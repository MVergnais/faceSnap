export class FaceSnapInterface {

  location?: string; //  propriéte optionnelle aux classses. Cette propriété peut ne pas avoir de valeur

  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdAt: Date,
              public snaps: number) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setlocation(location:string):void{ // Nouvelle méthode pour permettre d'ajouter une localisation
    this.location = location;
  }
}