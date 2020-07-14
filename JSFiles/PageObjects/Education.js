"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const protractor_1 = require("protractor");
class Education {
    constructor() {
        this.Educationbtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='mat-button mat-icon-button'])[2]"));
        this.Qualification = protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-form-field-infix'])[1]"));
        this.Univercity = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-2']"));
        this.Institute = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-3']"));
        this.YearOfPass = protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-select-value'])[2]"));
        this.Percentage = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-4']"));
        this.save = protractor_1.element(protractor_1.by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[1]"));
    }
}
exports.Education = Education;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWR1Y2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvRWR1Y2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFNBQVM7SUFTbEI7UUFFRSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7SUFJakcsQ0FBQztDQUNGO0FBdEJILDhCQXNCRyJ9