import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css'
})
export class CustomButton {

  @Input() type?: string;
  @Input() disabled?: boolean;
  @Input() name?: string;
  @Input() value?: string;
  @Input() content?: string;
  @Input() customColor?: boolean = false;
  @Input() textColor: string = "";
  @Input() backgroundColor: string = "";
  @Input() href?: string;

  public getStyles() {
    let defaultStyle = "font-bold cursor-pointer normal-case px-4 py-2 rounded-md hover:scale-110 transition-transform duration-300 ";

    if(this.customColor) {
      defaultStyle += (this.backgroundColor?.trim()) ? this.backgroundColor + " " : "bg-gray-600 ";
      defaultStyle += (this.textColor?.trim()) ? this.textColor + " " : "text-black ";
    }

    return defaultStyle
  }

}
