"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conference = void 0;
const protractor_1 = require("protractor");
class Conference {
    constructor() {
        this.ConferenceBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='mat-button mat-icon-button'])[5]"));
        this.Conferencetitle = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-13']"));
        this.ConferencePlace = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-14']"));
        this.ConferenceDate = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-15']"));
        this.ConferenceDisc = protractor_1.element(protractor_1.by.xpath("//textarea[@id='mat-input-16']"));
        this.ConferenceChooseFile = protractor_1.element(protractor_1.by.xpath("(//input[@id='file'])[3]"));
        this.ConferenceConSave = protractor_1.element(protractor_1.by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[4]"));
    }
}
exports.Conference = Conference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmVyZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL0NvbmZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsVUFBVTtJQVVuQjtRQUVFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7SUFDN0csQ0FBQztDQUNGO0FBcEJILGdDQW9CRyJ9