"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Research = void 0;
const protractor_1 = require("protractor");
class Research {
    constructor() {
        this.ResearchBtn = protractor_1.element(protractor_1.by.xpath("(//button[@class='mat-button mat-icon-button'])[2]"));
        this.ResearchTitle = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-5']"));
        this.ResearchType = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-6']"));
        this.ResearchDate = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-7']"));
        this.ResearchDiscription = protractor_1.element(protractor_1.by.xpath("//textarea[@id='mat-input-8']"));
        this.ChooseFile = protractor_1.element(protractor_1.by.xpath("//input[@id='file']"));
        this.save = protractor_1.element(protractor_1.by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[2]"));
    }
}
exports.Research = Research;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZWFyY2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9SZXNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxRQUFRO0lBVW5CO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUNKO0FBcEJILDRCQW9CRyJ9