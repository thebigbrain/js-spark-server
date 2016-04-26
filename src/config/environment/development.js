'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        //uri: 'mongodb://192.168.2.10/jssparkui-dev',
        uri: 'mongodb://localhost/jssparkui-dev',
        options: {
            user: 'js-spark',
            pass: 'js-spark1'
        }
    },

    seedDB: true
    //seedDB: false
};
