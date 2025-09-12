import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle, /* Permet d'ajouter un comportement */
    NgClass, /* Permet d'ajouter une classe */
    /* Ne sont pas appliqué dans face-snap.html, c'est à titre d'exemple */
    //UpperCasePipe, /* pour modifier la casse d'un texte en utilisant pipe */
    //LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
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
  myLargeNumber: number = 4667916.76 /* Pour faire les tests pour formater des nombres */
  myLargePercentage: number = 0.3367
  myprice: number = 336.75
  /* A chaque nouvelles variables, pensez à l'importer dans imports:[] */


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
