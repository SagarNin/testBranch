import { browser } from "protractor";

import { LoginPage } from "../PageObjects/LoginPage";
import { protractor } from "protractor";
import { ProfilePage } from "../PageObjects/ProfilePage";
import { Education } from "../PageObjects/Education";

var login = new LoginPage();
var education = new Education();

describe('Education verification test suite', function () {
  
  it("Education verification", async () => {

    
    console.log('Browser Launched...!')
    //Maximising window using maximize() method
    await browser.driver.manage().window().maximize();
    console.log('Browser Window maximized...!')
     // await browser.driver.manage().window().setSize(1366, 625);
    //set each page load timeout to 30 seconds
    await browser.driver.manage().timeouts().pageLoadTimeout(30000);
    console.log('Page load timeout set to 30 seconds')
    //set implicit wait to 10 seconds
    await browser.driver.manage().timeouts().implicitlyWait(10000);
    console.log('Implicit wait set to 10 seconds')
    //hit URL using get() method
    await browser.get('http://v3.purestudy.com/auth/login');
    console.log('RED url hit!')
    //provide input in input box using sendkeys() method
    await browser.sleep(3000);
    await login.userName.sendKeys('Preeti_Shenoy13944');
    console.log('Username Entered')
    await browser.sleep(3000);
    await login.password.sendKeys('123456');
    console.log('Password Entered')
    await browser.sleep(3000);
   //click on login Button using click() method
    await login.loginButton.click();
    console.log('Try to Login to system using given credentials')
    await browser.sleep(3000);

    console.log('click on add Button')
    await education.Educationbtn.click();
    await browser.sleep(3000);

    await education.Qualification.sendKeys('BE');
    console.log('Qualification Enter')
    await browser.sleep(3000);

    await education.Univercity.sendKeys('pune');
    console.log('univercity Enter')
    await browser.sleep(3000);

    await education.Institute.sendKeys('JDIET');
    console.log('College Enter')
    await browser.sleep(3000);

    await education.YearOfPass.sendKeys('2011');
    console.log('passing year Enter')
    await browser.sleep(3000);

    await education.Percentage.sendKeys('81');
    console.log('percentage Enter')
    await browser.sleep(3000);

    await education.save.click;
    console.log('passing year Enter')
    await browser.sleep(3000);

  })
})
