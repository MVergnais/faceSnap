import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapInterface } from '../models/face-snap.interface';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  imports: [
    TitleCasePipe
 ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})

// le component doit implémenter l'interface  OnInit

export class FaceSnap {
  @Input() faceSnap!: FaceSnapInterface;

  constructor(private router: Router){}

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

