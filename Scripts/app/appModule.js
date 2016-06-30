(function () {
    'use strict';

    angular
        .module('sampleApp', [
            'sampleApp.Core',
            'sampleApp.CustomModule'
        ]);

    // Injected Dependency list of All Core 3rd Party Libraries
    angular
        .module('sampleApp.Core', [
        ]);

    // Injected Dependency list of All Modules
    angular
        .module('sampleApp.CustomModule', [
            'sampleApp.home'
        ]);


})();
