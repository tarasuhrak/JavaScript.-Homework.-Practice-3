describe('Protractor Demo App', function (){
    it ('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});

describe('describe some test', function() {

  it('describe some step', function() {
    $('.email').sendKeys(browser.params.login.email);
    $('.password').sendKeys(browser.params.login.password);
  });
});