import { Component } from '@angular/core';
import { CustomButton } from '../../components/custom-button/custom-button';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [CustomButton, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
