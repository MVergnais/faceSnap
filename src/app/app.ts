import { Component, OnInit } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapList,
     ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {

}