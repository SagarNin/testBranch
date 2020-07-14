"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publication = void 0;
const protractor_1 = require("protractor");
class Publication {
    constructor() {
        this.PublicationBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-button mat-icon-button'])[4]"));
        this.publicationTye = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-9']"));
        this.publicationTitle = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-10']"));
        this.publicationDate = protractor_1.element(protractor_1.by.xpath("//input[@id='mat-input-11']"));
        this.publicationDiscrip = protractor_1.element(protractor_1.by.xpath("//textarea[@id='mat-input-12']"));
        this.publicationChooseFile = protractor_1.element(protractor_1.by.xpath("(//input[@id='file'])[2]"));
        this.Pubsave = protractor_1.element(protractor_1.by.xpath("(//button[@class='warn mr-8 mat-button ng-star-inserted'])[3]"));
    }
}
exports.Publication = Publication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVibGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9QdWJsaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFHeEQsTUFBYSxXQUFXO0lBYXRCO1FBRUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQyxDQUFDO0lBR3BHLENBQUM7Q0FDQTtBQXpCSCxrQ0F5QkcifQ==