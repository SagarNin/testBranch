import { ElementFinder, element, by } from "protractor";


export class Publication {


  PublicationBtn: ElementFinder;

  
  publicationTye: ElementFinder;
  publicationTitle: ElementFinder;
  publicationDate: ElementFinder;
  publicationDiscrip: ElementFinder;
  publicationChooseFile: ElementFinder;
  Pubsave : ElementFinder;

  constructor()
    {
    this.PublicationBtn = element(by.xpath("//button[@class='mat-button mat-icon-button'])[4]"));
    this.publicationTye = element(by.xpath("//input[@id='mat-input-9']"));
    this.publicationTitle = element(by.xpath("//input[@id='mat-input-10']"));
    this.publicationDate = element(by.xpath("//input[@id='mat-input-11']"));
    this.publicationDiscrip = element(by.xpath("//textarea[@id='mat-input-12']"));
    this.publicationChooseFile = element(by.xpath("(//input[@id='file'])[2]"));
    this.Pubsave = element(by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[3]"));


  }
  }
