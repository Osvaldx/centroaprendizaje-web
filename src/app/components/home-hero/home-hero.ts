import { Component } from '@angular/core';
import { CustomButton } from '../custom-button/custom-button';

@Component({
  selector: 'app-home-hero',
  imports: [CustomButton],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css'
})
export class HomeHero {

}
