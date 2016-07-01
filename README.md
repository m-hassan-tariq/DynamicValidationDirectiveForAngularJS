# Dynamic Validation Directive For AngularJS
Custom directive that allows text only, number only, special character only or allow everything as per user choice.

Angular Code:

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

Output: 

![2016-07-01 14_07_02-mozilla firefox](https://cloud.githubusercontent.com/assets/10474169/16532053/1cdc509a-3f95-11e6-97b1-c221e3292959.png)

