import { Injectable } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';
import { SnapType } from '../models/snap-type.type';
import { FaceSnapList } from '../face-snap-list/face-snap-list';
import { SingleFaceSnap } from '../single-face-snap/single-face-snap';
import { FaceSnap } from '../face-snap/face-snap';


@Injectable({
  providedIn: 'root' /* on lui dit que ce service on l'injecte à la raicne de l'application. 
    C'est souvent le czs  pour des services.
    Un service n'a pas de méthode  ngOnInit() */,
})
export class FaceSnapsService {
  /* on rend ce talbleau private */
  private faceSnaps: FaceSnapInterface[] = [
    /* on a un tableau avec autant de modèles de faceSnap que le veut */
    new FaceSnapInterface(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new FaceSnapInterface(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://cdn.pixabay.com/photo/2022/09/03/11/46/rocky-mountain-7429407_1280.jpg',
      new Date(),
      5
    ) .withLocation('à la montagne') /* avec une methode provenant de l'interface face-snap.interface. 
    Rajout de la localisation */,
    new FaceSnapInterface(
      'Un bon repas',
      "Mmmh ! que c'est bon",
      'https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg',
      new Date(),
      156
    ),
  ];
  getFaceSnaps(): FaceSnapInterface[] {
    return [...this.faceSnaps]; /* on revoit une copie de ce tableau */
  }
  getFaceSnapById(faceSnapId: string): FaceSnapInterface {
    const foundFaceSnap : FaceSnapInterface | undefined = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found');
    }
    return foundFaceSnap;
  }

/*  snap avec un id donnée */
  snapFaceSnapById(FaceSnapId: string, snapType : SnapType): void {
    const faceSnap = this.getFaceSnapById(FaceSnapId)
    this.faceSnaps.snap(snapType); // on a typé le snap, fonctionne car c'est une instance du modele faceSnap interface
  }
}
