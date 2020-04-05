let homepage = require('../pages/homepage');

describe('Demo Calculator test', function () {

    it('additon test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);

        homepage.enterFirstName('6');
        browser.sleep(2000);


        homepage.enterSecondName('6');
        browser.sleep(2000);


        homepage.clickGo();
        browser.sleep(2000);

        homepage.verifyResult('12');

   
    });
});