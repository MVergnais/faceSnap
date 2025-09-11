import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapInterface } from './models/face-snap.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnap
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  /* On va créér un tableau pour récuperer nos données du modèle */
  faceSnaps!:FaceSnapInterface[];
  
  mySnap!: FaceSnapInterface;
  myOtherSnap!:FaceSnapInterface;
  myLastSanp!:FaceSnapInterface;

  ngOnInit(): void {
    this.faceSnaps = [ /* on a un tableau avec autant de modèles de faceSnap que le veut */
      new FaceSnapInterface(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    ),
    new FaceSnapInterface (
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://cdn.pixabay.com/photo/2022/09/03/11/46/rocky-mountain-7429407_1280.jpg',
      new Date(),
      5
    ),
    new FaceSnapInterface (
      'Un bon repas',
      'Mmmh ! que c\'est bon',
      'https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg',
      new Date(),
      156
    )
    ];
  
    this.faceSnaps[1].setlocation('à la montagne') /* Rajout de la localisation */
    
  }
}