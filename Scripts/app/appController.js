(function () {
    'use strict';

    angular
        .module('sampleApp.home', [])
        .controller('HomeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        var vm = this;

        init();

        function init() {
            vm.page = { radio: '' , text : '' };
            vm.placeHolderText = "Allow everything";

            vm.resetTextBox = resetTextBox;
        }

        ////////////////////////////Implementation//////////////////////////////////////

        function resetTextBox(text) {
            vm.page.text = "";
            vm.placeHolderText = text;
        }

        ////////////////////////////Helping Function//////////////////////////////////////

    };

})();
