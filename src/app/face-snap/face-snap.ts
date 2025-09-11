import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';


@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})

// le component doit implémenter l'interface  OnInit

export class FaceSnap implements OnInit {
  @Input() FaceSnapInterface!: FaceSnapInterface; // il faut ajouter le décorateur @Input 
  // pour qu'une propriété extérieur d'un component puisse être injecté
  // propriété faceSnap de type FaceSnap

  snapButtonText!:string;
  userHasSnapped!:boolean;

ngOnInit(): void{ // Méthode elle permet d'initialiser des propriétés
  this.snapButtonText = 'Oh Snap !';
  this.userHasSnapped = false;
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
    this.FaceSnapInterface.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

// Si l'utlisateur a clické
snap() {
    this.FaceSnapInterface.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}

}
