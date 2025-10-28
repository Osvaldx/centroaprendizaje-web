import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';
import { AboutSection } from '../../components/about-section/about-section';
import { LocationSection } from '../../components/location-section/location-section';
import { ServicesSection } from '../../components/services-section/services-section';
import { GalerySection } from '../../components/galery-section/galery-section';
import { FormSection } from '../../components/form-section/form-section';

@Component({
  selector: 'app-home',
  imports: [HomeHero, AboutSection, LocationSection, ServicesSection, GalerySection, FormSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
