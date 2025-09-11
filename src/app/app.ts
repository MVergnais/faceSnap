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
  mySnap!: FaceSnapInterface;
  myOtherSnap!:FaceSnapInterface;
  myLastSanp!:FaceSnapInterface;

  ngOnInit() {
    this.mySnap = new FaceSnapInterface(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );
    this.myOtherSnap = new FaceSnapInterface(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://cdn.pixabay.com/photo/2022/09/03/11/46/rocky-mountain-7429407_1280.jpg',
      new Date(),
      5
    );
    this.myLastSanp! = new FaceSnapInterface(
      'Un bon repas',
      'Mmmh ! que c\'est bon',
      'https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg',
      new Date(),
      8
    );
    this.myOtherSnap.setlocation('à la montagne') /* Rajout de la localisation */
  }
}