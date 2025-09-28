import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {

  @Input() icon?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() dataList?: string[] = [];
  @Input() colorCard: string = "";
  @Input() colorIcon: string = "";

  public getIconColor() {
    let defaultStyle = "p-2 rounded-xl w-fit shadow-lg ";
    let style = (this.colorCard.trim()) ? this.colorIcon : "bg-green-200";
    return defaultStyle + style;
  }
  
  public getColorCard() {
    let defaultStyle = "flex flex-col bg-white gap-3 p-5 border-1 border-t-3 border-gray-600/30 rounded-2xl text-gray-800 shadow-xl h-full hover:scale-105 transition-transform hover:bg-gray-100 "
    let style = (this.colorCard.trim()) ? this.colorCard : "border-t-green-200";
    return defaultStyle + style;
  }

}
