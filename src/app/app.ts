import { Component, OnInit } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    FaceSnapList
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {

}