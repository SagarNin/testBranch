"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
class LoginPage {
    //when we put something inside constructor those things get initialised at the time of creating object
    constructor() {
        //Initialised all web elements from searchPage
        this.userName = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="user_name"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.loginButton = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-button-wrapper"]'));
        this.rememberMe = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-checkbox-inner-container"]'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFxRjtBQUVyRixNQUFhLFNBQVM7SUFTcEIsc0dBQXNHO0lBQ3RHO1FBQ0ksOENBQThDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0NBQ0Y7QUFqQkQsOEJBaUJDIn0=