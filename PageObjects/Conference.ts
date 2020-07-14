import { ElementFinder, element, by } from "protractor";

export class Conference
{
     ConferenceBtn: ElementFinder;
    Conferencetitle: ElementFinder;
    ConferencePlace: ElementFinder;
    ConferenceDate: ElementFinder;
    ConferenceDisc: ElementFinder;
    ConferenceChooseFile: ElementFinder;
    ConferenceConSave: ElementFinder;
    
    constructor()
    {
      this.ConferenceBtn = element(by.xpath("(//button[@class='mat-button mat-icon-button'])[5]"));
      this.Conferencetitle = element(by.xpath("//input[@id='mat-input-13']"));
      this.ConferencePlace = element(by.xpath("//input[@id='mat-input-14']"));
      this.ConferenceDate = element(by.xpath("//input[@id='mat-input-15']"));
      this.ConferenceDisc = element(by.xpath("//textarea[@id='mat-input-16']"));
      this.ConferenceChooseFile = element(by.xpath("(//input[@id='file'])[3]"));
      this.ConferenceConSave =element(by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[4]"));
    }
  }
