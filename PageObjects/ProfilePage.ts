import { ElementFinder, element, by } from "protractor";

export class ProfilePage {

    persnalinfoBtn: ElementFinder;
    prefix: ElementFinder
    firstName: ElementFinder
    middleName: ElementFinder
    lastName: ElementFinder
    bloodGroup: ElementFinder
    gender: ElementFinder
    DOB: ElementFinder
    currentAddress: ElementFinder
    pinCode: ElementFinder
    emailId: ElementFinder
    alternateEmail: ElementFinder
    contact: ElementFinder
    landLine: ElementFinder
    aboutMe: ElementFinder
    city: ElementFinder
    state: ElementFinder
  DOJ: ElementFinder
   save : ElementFinder
    
    constructor()
    {
      this.persnalinfoBtn = element(by.xpath("(//button[@class='mat-button mat-icon-button'])[1]"));
      this.prefix= element(by.css('#mat-select-2 > div > div.mat-select-value'))
      this.firstName = element(by.xpath('//input[@placeholder="Enter First Name"]'));
      this.middleName = element(by.xpath('//input[@placeholder="Enter middle Name"]'));
      this.lastName = element(by.xpath('//input[@placeholder="Enter Last Name"]'))
      this.bloodGroup = element(by.xpath('//input[@placeholder="Enter Blood Group"]'))  
      this.gender = element(by.css('#mat-select-3 > div > div.mat-select-value'))
      this.DOB = element(by.xpath('//input[@placeholder="Date of Birth"]'))
      this.currentAddress = element(by.xpath('//input[@placeholder="Current Address"]'));
      this.pinCode = element(by.xpath('//input[@placeholder="Enter Pin code"]'))
      this.emailId = element(by.xpath('//input[@placeholder="Email Id"]'))
      this.alternateEmail = element(by.xpath('//input[@placeholder="Alternate Email Id"]'))
      this.contact = element(by.xpath('//input[@placeholder="Mobile no"]'));
      this.landLine = element(by.xpath('//input[@placeholder="Enter Landline no"]'))
      this.aboutMe = element(by.xpath('//input[@placeholder="About Me"]'));
      this.city = element(by.css('#mat-select-4 > div > div.mat-select-value'))
      this.state = element(by.css('#mat-select-5 > div > div.mat-select-value'));
      this.DOJ = element(by.xpath('//input[@placeholder="Date of joining"]'))
      //this.save = element(by.xpath('//b[contains(text(),'Save')]'));
    }
  }

