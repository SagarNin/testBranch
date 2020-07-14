"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../PageObjects/LoginPage");
const Publication_1 = require("../PageObjects/Publication");
var login = new LoginPage_1.LoginPage();
var pub = new Publication_1.Publication();
describe('Login Page Test suite', function () {
    it("Login Validation", () => __awaiter(this, void 0, void 0, function* () {
        console.log('Browser Launched...!');
        //Maximising window using maximize() method
        yield protractor_1.browser.driver.manage().window().maximize();
        console.log('Browser Window maximized...!');
        // await browser.driver.manage().window().setSize(1366, 625);
        //set each page load timeout to 30 seconds
        yield protractor_1.browser.driver.manage().timeouts().pageLoadTimeout(30000);
        console.log('Page load timeout set to 30 seconds');
        //set implicit wait to 10 seconds
        yield protractor_1.browser.driver.manage().timeouts().implicitlyWait(10000);
        console.log('Implicit wait set to 10 seconds');
        //hit URL using get() method
        yield protractor_1.browser.get('http://v3.purestudy.com/auth/login');
        console.log('RED url hit!');
        //provide input in input box using sendkeys() method
        yield protractor_1.browser.sleep(3000);
        yield login.userName.sendKeys('Preeti_Shenoy13944');
        console.log('Username Entered');
        yield protractor_1.browser.sleep(3000);
        yield login.password.sendKeys('123456');
        console.log('Password Entered');
        yield protractor_1.browser.sleep(3000);
        //click on login Button using click() method
        yield login.loginButton.click();
        console.log('Try to Login to system using given credentials');
        yield protractor_1.browser.sleep(10000);
        // publication page start
        yield pub.PublicationBtn.click();
        console.log('click on publication btn');
        yield protractor_1.browser.sleep(3000);
        yield pub.publicationTitle.userName.sendKeys('Arihant');
        console.log(' Enter publication title');
        yield protractor_1.browser.sleep(3000);
        yield pub.publicationTye.userName.sendKeys('History');
        console.log(' Enter publication type');
        yield protractor_1.browser.sleep(3000);
        yield pub.publicationDate.userName.sendKeys('12/3/2001');
        console.log(' Enter publication date');
        yield protractor_1.browser.sleep(3000);
        yield pub.publicationDiscrip.userName.sendKeys('Hello');
        console.log(' Enter publication publication Discription');
        yield protractor_1.browser.sleep(3000);
        yield pub.publicationChooseFile.click;
        console.log(' Enter pub file');
        yield protractor_1.browser.sleep(3000);
        yield pub.Pubsave.click;
        console.log(' click on save');
        yield protractor_1.browser.sleep(3000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVibGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UZXN0Q2FzZXMvUHVibGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBcUM7QUFFckMsd0RBQXFEO0FBRXJELDREQUF5RDtBQUV6RCxJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUc1QixRQUFRLENBQUMsdUJBQXVCLEVBQUU7SUFFaEMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEdBQVMsRUFBRTtRQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDbkMsMkNBQTJDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBQzFDLDZEQUE2RDtRQUM5RCwwQ0FBMEM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1FBQ2xELGlDQUFpQztRQUNqQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDOUMsNEJBQTRCO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FB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