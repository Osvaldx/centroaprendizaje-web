import { Component, OnInit, signal } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';

@Component({
  selector: 'app-services-section',
  imports: [ServiceCard],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSection implements OnInit {

  public showPromo = signal<boolean>(false);

  ngOnInit(): void {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // +1 para hacerlo mes humano

    const promoMonths = [4, 5, 6, 9, 10]; // abril, mayo, junio, septiembre, octubre

    if(promoMonths.includes(month)) {
      if(day >= 1 && day <= 10) {
        this.showPromo.set(true);
      } else {
        this.showPromo.set(false);
      }
    }
  }

}
