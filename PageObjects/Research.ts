import { ElementFinder, element, by } from "protractor";

export class Research {

    ResearchBtn: ElementFinder;
    ResearchTitle: ElementFinder;
    ResearchType : ElementFinder;
    ResearchDate : ElementFinder;
    ResearchDiscription : ElementFinder;
    ChooseFile : ElementFinder;
    save: ElementFinder;
    
  constructor()
  {
      this.ResearchBtn = element(by.xpath("(//button[@class='mat-button mat-icon-button'])[2]"));
      this.ResearchTitle = element(by.xpath("//input[@id='mat-input-5']"));
      this.ResearchType = element(by.xpath("//input[@id='mat-input-6']"));
      this.ResearchDate = element(by.xpath("//input[@id='mat-input-7']"));
      this.ResearchDiscription = element(by.xpath("//textarea[@id='mat-input-8']"));
      this.ChooseFile = element(by.xpath("//input[@id='file']"));
      this.save = element(by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[2]"));
      }
  }
