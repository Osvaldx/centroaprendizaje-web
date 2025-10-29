import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-galery-section',
  standalone: true,
  templateUrl: './galery-section.html',
  styleUrl: './galery-section.css'
})
export class GalerySection implements OnDestroy {

  images = signal([
    'assets/clasemejorada.webp',
    'assets/clase2mejorada.webp',
    'assets/fondoo.webp',
    'assets/clase2aula.webp',
    'assets/frenteok.webp',
  ]);

  currentIndex = signal(0);
  timeChangeIndex = signal(3);
  private intervalId: any;

  // Función para obtener las imágenes visibles (anterior, actual, siguiente)
  getVisibleImages() {
    const images = this.images();
    const current = this.currentIndex();
    const length = images.length;
    
    return {
      prev: images[(current - 1 + length) % length],
      current: images[current],
      next: images[(current + 1) % length]
    };
  }

  // Función para obtener el índice de una imagen
  getImageIndex(offset: number) {
    const length = this.images().length;
    return (this.currentIndex() + offset + length) % length;
  }

  constructor() { 
    const id = setInterval(() => {
      this.timeChangeIndex.update(i => i-1);
      if(this.timeChangeIndex() === 0) {
        this.nextImage();
      }
    }, 1000);
    
    this.intervalId = id;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextImage() {
    const next = (this.currentIndex() + 1) % this.images().length;
    this.currentIndex.set(next);
    this.timeChangeIndex.set(3);
  }
  
  prevImage() {
    const prev = (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.currentIndex.set(prev);
    this.timeChangeIndex.set(3);
  }

  goToImage(index: number) {
    this.currentIndex.set(index);
    this.timeChangeIndex.set(3);
  }
}
