describe('Demo Calculator test', function(){

  it('additon test' , function(){

    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);
    element(by.model('first')).sendKeys('6');
    browser.sleep(2000);

    element(by.model('second')).sendKeys('6');
    browser.sleep(2000);
    
    element(by.css('[ng-click="doAddition()"]')).click();
    browser.sleep(2000);

    let result=element(by.cssContainingText('.ng-binding','12'));
    expect(result.getText(result)).toEqual('12');

    
  });
});