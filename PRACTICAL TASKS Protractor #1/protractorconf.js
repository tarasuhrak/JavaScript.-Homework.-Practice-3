exports.config = {
    params: {             // Set the parameters using params config option 
        login: {
          email: 'default',
          password: 'default'
        }
      },
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:444/wd/hub',
    specs: ['specs.js'],
    capabilities: {
        browserName: "firefox" //new browser
    },

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo');
      },
};