
import { browser } from "protractor";

import { LoginPage } from "../PageObjects/LoginPage";
import { protractor } from "protractor";
import { ProfilePage } from "../PageObjects/ProfilePage";

var login = new LoginPage();
var profile = new ProfilePage();

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

    // Operation on persnal info
    await profile.prefix.click;
    console.log('click on add button')
    await browser.sleep(3000);

    await profile.firstName.sendKeys('Sagar');
    console.log('Enter first name')
    await browser.sleep(3000);

    await profile.middleName.sendKeys('Dattatray');
    console.log('Enter middleName')
    await browser.sleep(3000);

    await profile.lastName.sendKeys('Ningurkar');
    console.log('Enter lastname')
    await browser.sleep(3000);

    await profile.bloodGroup.sendKeys('A+');
    console.log('Enter blood grp')
    await browser.sleep(3000);

    await profile.DOB.sendKeys('08/02/1993')
    console.log('Enter dob')
    await browser.sleep(3000);

    await profile.currentAddress.sendKeys('Ram Nagar')
    console.log('Enter Current add')
    await browser.sleep(3000);

    await profile.pinCode.sendKeys('445001')
    console.log('Enter pincode')
    await browser.sleep(3000);

    await profile.emailId.sendKeys('sagarnin121@gmail.com')
    console.log('Enter email')
    await browser.sleep(3000);

    await profile.alternateEmail.sendKeys('sagar121@gmail.com')
    console.log('Enter Altemail')
    await browser.sleep(3000);

    await profile.contact.sendKeys('7709944077')
    console.log('Enter contact no')
    await browser.sleep(3000);

    await profile.landLine.sendKeys('0756788687')
    console.log('Enter landline no')
    await browser.sleep(3000);

    await profile.DOJ.sendKeys('12 oct')
    console.log('Enter doj')
    await browser.sleep(3000);

    await profile.save.click
    console.log('Click on savel')
    





    




  });
}); 
