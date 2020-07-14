import { ElementFinder, by, element } from "protractor";

export class OtherActivity
{
    
    otheractivityBtn: ElementFinder;
    OtherTitle: ElementFinder;
    QipDiscription: ElementFinder;
    ChooseFile: ElementFinder;
    save: ElementFinder;
  
    constructor()
    {
      this.otheractivityBtn = element(by.xpath("(//button[@class='mat-button mat-icon-button'])[6]"));
      this.OtherTitle = element(by.xpath("//input[@id='mat-input-17']"));
      this.QipDiscription = element(by.xpath("//textarea[@id='mat-input-18']"));
      this.ChooseFile = element(by.xpath("(//input[@id='file'])[4]"));
      this.save = element(by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[5]"));

    }
  }
