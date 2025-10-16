import { Component, OnDestroy, effect, signal } from '@angular/core';

@Component({
  selector: 'app-galery-section',
  standalone: true,
  templateUrl: './galery-section.html',
  styleUrl: './galery-section.css'
})
export class GalerySection implements OnDestroy {

  images = signal([
    'assets/clasemejorada.png',
    'assets/clase2aula.png',
    'assets/clase2mejorada.png',
    'assets/frenteok.png',
  ]);

  currentIndex = signal(0);
  private intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextImage() {
    const next = (this.currentIndex() + 1) % this.images().length;
    this.currentIndex.set(next);
  }

  prevImage() {
    const prev =
      (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.currentIndex.set(prev);
  }

  goToImage(index: number) {
    this.currentIndex.set(index);
  }
}
