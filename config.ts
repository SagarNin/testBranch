

import {Config, browser} from 'protractor';

export let config: Config = {
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
    onPrepare: async ()=> {
      await browser.waitForAngularEnabled(false);
      var AllureReporter = require('jasmine-allure-reporter');
      var reporter = new AllureReporter({
          allureReport : {
              resultsDir : 'allure-results'
          }
      });
   }
  }