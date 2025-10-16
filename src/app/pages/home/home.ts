import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';
import { AboutSection } from '../../components/about-section/about-section';
import { LocationSection } from '../../components/location-section/location-section';
import { ServicesSection } from '../../components/services-section/services-section';

@Component({
  selector: 'app-home',
  imports: [HomeHero, AboutSection, LocationSection, ServicesSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
