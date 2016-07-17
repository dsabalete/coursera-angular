# Code of an AngularJS course
This workspace has the code used in a Coursera's MOOC: Introduction to AngularJS lectured by Prof. Jogesh K.Muppala from the Hong Kong University. 
https://www.coursera.org/learn/angular-js


## Instructions for setting development enviroment
    $ npm install bower
    $ bower install bootstrap


### Package to install for grunt exercise
    $ npm install -g grunt-cli
    $ npm install grunt --save-dev
    $ npm install grunt-contrib-jshint --save-dev
    $ npm install jshint-stylish --save-dev
    $ npm install time-grunt --save-dev
    $ npm install jit-grunt --save-dev
    $ npm install grunt-contrib-copy --save-dev 
    $ npm install grunt-contrib-clean
    $ npm install grunt-contrib-concat --save-dev
    $ npm install grunt-contrib-cssmin --save-dev
    $ npm install grunt-contrib-uglify --save-dev
    $ npm install grunt-filerev --save-dev
    $ npm install grunt-usemin --save-dev
    $ npm install grunt-contrib-watch --save-dev
    $ npm install grunt-contrib-connect --save-dev


### Package to install for gulp exercise
    $ npm install -g gulp
    $ npm install gulp --save-dev
    $ npm install gulp-jshint --save-dev
    $ npm install jshint-stylish --save-dev
    $ npm install gulp-imagemin --save-dev 
    $ npm install gulp-concat --save-dev
    $ npm install gulp-uglify --save-dev
    $ npm install gulp-clean-css --save-dev
    $ npm install gulp-usemin --save-dev
    $ npm install gulp-cache --save-dev
    $ npm install gulp-rev --save-dev
    $ npm install gulp-rename --save-dev
    $ npm install gulp-notify --save-dev
    $ npm install browser-sync --save-dev
    $ npm install del --save-dev
    
    $ npm install gulp-ng-annotate --save-dev
    
    
### All-in-one script for install all the required stuff
    $ curl https://raw.githubusercontent.com/dsabalete/binutils/master/setup-angular.sh | sh
    
    
### To install Angular ngRoute module
    $ bower install angular-route -S
    
    
### To install Angular UI Router
    $ bower install angular-ui-router -S
    
    
    
### To install JSON server
    $ sudo npm install json-server -g
    
    
### To start json-server 
    $ json-server -p 8081 -H $IP --watch ../json-server/db.json
    
    
### To install ngResource module
    $ bower install angular-resource -S
    

### To Install Jasmine Testing Framework
    $ sudo npm install jasmine-core --save-dev
    

### To install Karma command line interface (for testing)
    $ sudo npm install karma-cli -g
    
    
### To install the Karma-jasmine plugin
    $ npm install karma-jasmine --save-dev
    
    
### To install browsers plugins
    $ npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev
    
    
### To install Angular Mocks module
    $ bower install angular-mocks -S
    
    
### To start karma server testing engine
    $ karma start karma.conf.js
    

### To install Protractor and selenium
    $ sudo npm install protractor -g
    $ sudo webdriver-manager update
    

### To execute e2e testing with Protractor (this is for local testing, it doesn't work on cloud9)
    $ protractor protractor.conf.js
    
    
### To install yo:
    $ npm install yo -g
    
    
### To install generators:
    $ npm install generator-angular -g