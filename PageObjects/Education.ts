import { ElementFinder, element, by } from "protractor";

export class Education{
    Educationbtn: ElementFinder;
    Qualification: ElementFinder;
    Univercity: ElementFinder;
    Institute: ElementFinder;
    YearOfPass: ElementFinder;
    Percentage: ElementFinder;
    save: ElementFinder;
    
    constructor()
    {
      this.Educationbtn = element(by.xpath("(//button[@class='mat-button mat-icon-button'])[2]"));
      this.Qualification = element(by.xpath("(//div[@class='mat-form-field-infix'])[1]"));
      this.Univercity = element(by.xpath("//input[@id='mat-input-2']"));
      this.Institute = element(by.xpath("//input[@id='mat-input-3']"));
      this.YearOfPass = element(by.xpath("(//div[@class='mat-select-value'])[2]"));
      this.Percentage = element(by.xpath("//input[@id='mat-input-4']"));
      this.save = element(by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[1]"));
        
      
      
    }
  }

