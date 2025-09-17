import { Component, OnInit } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snap.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FaceSnapList } from '../face-snap-list/face-snap-list';



@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass, /* Permet d'ajouter une classe */
    TitleCasePipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss'
})

// le component doit implémenter l'interface  OnInit
export class SingleFaceSnap implements OnInit {
  faceSnapInterface!: FaceSnapInterface;
  snapButtonText!: string;
  userHasSnapped!: boolean;
 
  constructor(private faceSnapsService : FaceSnapsService,
              private route: ActivatedRoute) {} 

ngOnInit(): void{ // Méthode elle permet d'initialiser des propriétés
  this.prepareInterface();
  this.getFaceSnap();
}

onSnap(): void {
  if (this.userHasSnapped) {
    this.unSnap();
  } else {
    this.snap();
  }
}

// Si l'utlisateur n'a pas encore clické
unSnap() {
  this.faceSnapsService.snapFaceSnapById(this.faceSnapInterface.id, 'unsnap'); // passe par le service
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}

// Si l'utlisateur a clické
snap() {
  this.faceSnapsService.snapFaceSnapById(this.faceSnapInterface.id, 'snap'); // passe par le service
  this.snapButtonText = 'Oops, unSnap!';
  this.userHasSnapped = true;
}

  private prepareInterface(){
  this.snapButtonText = 'Oh Snap !';
  this.userHasSnapped = false;
  }
  private getFaceSnap(){
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnapInterface = this.faceSnapsService.getFaceSnapById('faceSnapId');
    }
}
