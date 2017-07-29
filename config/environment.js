/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chs-drinks',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // contentSecurityPolicy: {
    //   'default-src': "'none'",
    //   'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
    //   'font-src': "'self'",
    //   'connect-src': "'self' http://app.charlestondrinks.com",
    //   'img-src': "'self'",
    //   'report-uri':"'http://app.charlestondrinks.com'",
    //   'style-src': "'self' 'unsafe-inline'",
    //   'frame-src': "'none'"
    // }
  };

  if (environment === 'development') {
    ENV.host = "http://app.charlestondrinks.com";


    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = "http://app.charlestondrinks.com";

  }

  return ENV;
};
