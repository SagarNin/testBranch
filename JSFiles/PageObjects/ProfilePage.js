"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePage = void 0;
const protractor_1 = require("protractor");
class ProfilePage {
    constructor() {
        this.persnalinfoBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='mat-button mat-icon-button'])[1]"));
        this.prefix = protractor_1.element(protractor_1.by.css('#mat-select-2 > div > div.mat-select-value'));
        this.firstName = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter First Name"]'));
        this.middleName = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter middle Name"]'));
        this.lastName = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter Last Name"]'));
        this.bloodGroup = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter Blood Group"]'));
        this.gender = protractor_1.element(protractor_1.by.css('#mat-select-3 > div > div.mat-select-value'));
        this.DOB = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Date of Birth"]'));
        this.currentAddress = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Current Address"]'));
        this.pinCode = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter Pin code"]'));
        this.emailId = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Email Id"]'));
        this.alternateEmail = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Alternate Email Id"]'));
        this.contact = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Mobile no"]'));
        this.landLine = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Enter Landline no"]'));
        this.aboutMe = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="About Me"]'));
        this.city = protractor_1.element(protractor_1.by.css('#mat-select-4 > div > div.mat-select-value'));
        this.state = protractor_1.element(protractor_1.by.css('#mat-select-5 > div > div.mat-select-value'));
        this.DOJ = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Date of joining"]'));
        //this.save = element(by.xpath('//b[contains(text(),'Save')]'));
    }
}
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9Qcm9maWxlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBc0JwQjtRQUVFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsTUFBTSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUE7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUE7UUFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQTtRQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZFLGdFQUFnRTtJQUNsRSxDQUFDO0NBQ0Y7QUE1Q0gsa0NBNENHIn0=