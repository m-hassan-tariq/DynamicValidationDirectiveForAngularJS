(function () {
    'use strict';

    angular
        .module('sampleApp')
        .directive('validate', validate);

    function validate() {
        var directive = {
            restrict: 'EA',
            scope: {
                regex: '=criteria'
            },
            require: 'ngModel',
            controller: validateController,
            link: validateLink
        };

        return directive;
    }

    validateController.$inject = ['$scope'];

    function validateController($scope) {

        init();

        /////////////////////Implementation///////////////////////////////

        function init() {

        }
    }

    function validateLink(scope, element, attrs, ngModelCtrl) {

        element.on('focus', function (e) {
            ngModelCtrl.$parsers.push(validateInput);
        });

        function validateInput(input) {
            if (input) {
                var regex = new RegExp(scope.regex);
                var newValue = input.replace(regex, '');
                if (newValue !== input) {
                    ngModelCtrl.$setViewValue(newValue);
                    ngModelCtrl.$render();
                }
                return newValue;
            }
            return undefined;
        }
    }

})();
