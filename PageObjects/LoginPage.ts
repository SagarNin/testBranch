import { browser, by, ElementFinder, ElementArrayFinder, element } from 'protractor';

export class LoginPage {

 // Declared all webelements from searchPage
  userName : ElementFinder; 
  password : ElementFinder;
  rememberMe : ElementFinder
  forgotPassword : ElementFinder;
  loginButton : ElementFinder 

  //when we put something inside constructor those things get initialised at the time of creating object
  constructor(){ 
      //Initialised all web elements from searchPage
    this.userName = element(by.xpath('//*[@formcontrolname="user_name"]'));
    this.password = element(by.xpath('//*[@formcontrolname="password"]'));
    this.loginButton=element(by.xpath('//span[@class="mat-button-wrapper"]'));
    this.rememberMe=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
  }
}