import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage { /* Retour sue la page facesnap */
  /*  injecter le Router dans LandingPageComponent – 
  il s'importe depuis  @angular/router et s'injecte comme un service. */
  
  constructor(private router: Router){}
  onContinue(){
    this.router.navigateByUrl('facesnaps')
  }
}
