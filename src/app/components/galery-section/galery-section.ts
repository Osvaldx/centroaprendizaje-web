import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxMarqueeComponent, OmMarqueeItemDirective } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-galery-section',
  standalone: true,
  imports: [NgxMarqueeComponent, OmMarqueeItemDirective, CommonModule],
  templateUrl: './galery-section.html',
  styleUrl: './galery-section.css'
})
export class GalerySection {

  images = [
    'assets/1.webp',
    'assets/2.webp',
    'assets/3.webp',
    'assets/4.webp',
    'assets/5.webp',
    'assets/frenteok.webp',
    'assets/12.webp',
    'assets/13.webp',
    'assets/14.webp',
    'assets/15.webp',
    'assets/16.webp',
    'assets/17.webp',
    'assets/clase2mejorada.webp',
    'assets/fondoo.webp',
    'assets/7.webp',
    'assets/8.webp',
    'assets/9.webp',
    'assets/10.webp',
    'assets/11.webp',
    'assets/6.webp'
  ];
}