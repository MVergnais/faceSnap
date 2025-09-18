import { Component, OnInit } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';
import { FaceSnapsService } from '../services/face-snap.service';
import { FaceSnap } from '../face-snap/face-snap';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})

export class FaceSnapList implements OnInit{
/* On va créér un tableau pour récuperer nos données du modèle */
  faceSnaps!: FaceSnapInterface[];
  
  mySnap!: FaceSnapInterface;
  myOtherSnap!:FaceSnapInterface;
  myLastSanp!:FaceSnapInterface;

  constructor(private faceSnapsService: FaceSnapsService){} /* on a acces a l'intence de faceSnapsService de l'applications */

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    }
}
