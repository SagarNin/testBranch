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
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    //directConnect: true,
    allScriptsTimeout: 1500000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./TestCases/LoginVerification.js'],
    capabilities: {
        'browserName': 'chrome',
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1500000
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        var AllureReporter = require('jasmine-allure-reporter');
        var reporter = new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        });
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLDJDQUEyQztBQUVoQyxRQUFBLE1BQU0sR0FBVztJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLHNCQUFzQjtJQUN0QixpQkFBaUIsRUFBRSxPQUFPO0lBRTFCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsS0FBSyxFQUFFLENBQUMsa0NBQWtDLENBQUM7SUFDM0MsWUFBWSxFQUFFO1FBQ1osYUFBYSxFQUFFLFFBQVE7S0FDdkI7SUFDRixlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxPQUFPO0tBRWhDO0lBQ0QsU0FBUyxFQUFFLEdBQVEsRUFBRTtRQUNuQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDeEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUM7WUFDOUIsWUFBWSxFQUFHO2dCQUNYLFVBQVUsRUFBRyxnQkFBZ0I7YUFDaEM7U0FDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUE7Q0FDRCxDQUFBIn0=