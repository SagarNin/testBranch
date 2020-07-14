
import { browser } from "protractor";

import { LoginPage } from "../PageObjects/LoginPage";
import { protractor } from "protractor";
import { Publication } from "../PageObjects/Publication";

var login = new LoginPage();
var pub = new Publication();


describe('Login Page Test suite', function () {
  
  it("Login Validation", async () => {

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
    await browser.sleep(10000);

    // publication page start

    await pub.PublicationBtn.click();
    console.log('click on publication btn')
    await browser.sleep(3000);

    await pub.publicationTitle.userName.sendKeys('Arihant');
    console.log(' Enter publication title')
    await browser.sleep(3000);

    await pub.publicationTye.userName.sendKeys('History');
    console.log(' Enter publication type')
    await browser.sleep(3000);

    await pub.publicationDate.userName.sendKeys('12/3/2001');
    console.log(' Enter publication date')
    await browser.sleep(3000);

    await pub.publicationDiscrip.userName.sendKeys('Hello');
    console.log(' Enter publication publication Discription')
    await browser.sleep(3000);

    await pub.publicationChooseFile.click;
    console.log(' Enter pub file')
    await browser.sleep(3000);

    await pub.Pubsave.click;
    console.log(' click on save')
    await browser.sleep(3000);

    })
})  