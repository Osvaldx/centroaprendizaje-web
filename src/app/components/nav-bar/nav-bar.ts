import { Component, signal } from '@angular/core';
import { CustomButton } from '../custom-button/custom-button';

@Component({
  selector: 'app-nav-bar',
  imports: [CustomButton],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  
  public showMenu = signal<boolean>(false);

  public show() {
    this.showMenu.update(v => !v);
  }

}
