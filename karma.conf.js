module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-strap/dist/angular-strap.min.js',
      'app/bower_components/angular-strap/dist/angular-strap.tpl.min.js',
      'app/bower_components/angular-ui-select/dist/select.min.js',
      'app/bower_components/angular-sanitize/angular-sanitize.min.js',
      'app/bower_components/underscore/underscore.js',
      'app/app.js',
      'app/underscore.js',
      'app/directives/**/*.js',
      'app/controllers/**/*.js',
      'app/services/**/*.js',
      'unit-test/**/*.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/templates/**/*.html'
    ],


    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
    reporters: ['progress', 'coverage'],
    preprocessors :{
      'app/app.js': ['coverage'],
      'app/underscore.js': ['coverage'],
      'app/directives/**/*.js': ['coverage'],
      'app/controllers/**/*.js': ['coverage'],
      'app/services/**/*.js': ['coverage'],
      'app/templates/**/*.html':['ng-html2js']
    },
    ngHtml2JsPreprocessor: { 
      stripPrefix: 'app/'
    },
    plugins : [
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
