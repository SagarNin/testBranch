import { browser } from "protractor";

import { LoginPage } from "../PageObjects/LoginPage";
import { protractor } from "protractor";
import { ProfilePage } from "../PageObjects/ProfilePage";
import { Research } from "../PageObjects/Research";

var login = new LoginPage();
var research = new Research();

describe('profile verification test suite', function () {
  
  it("Persnal detail verification", async () => {

    
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

// Research page activation
    await research.ResearchBtn.click();
    console.log('Click on research button')
    await browser.sleep(3000);

    await research.ResearchTitle.sendKeys('Testing');
    console.log('Enter research title')
    await browser.sleep(3000);

    await research.ResearchType.sendKeys('selenium');
    console.log('Enter research typr')
    await browser.sleep(3000);

    await research.ResearchDate.sendKeys('12/4/2001');
    console.log('Enter research date')
    await browser.sleep(3000);

    await research.ResearchDiscription.sendKeys('selenium latest version');
    console.log('Enter research discription')
    await browser.sleep(3000);

    await research.ChooseFile.click();
    console.log('select file')
    await browser.sleep(3000);

    await research.save.click();
    console.log('Click on save button')
    await browser.sleep(3000);

  })
})