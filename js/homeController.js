var app = angular.module('MyApp', [])
app.controller('homeController',
    function($scope, $window) {

        $scope.navigateNext = function () {
            window.location.href = 'option.html';

        }

    });

    app.controller('optionController',
    function ($scope, $window) {

        $scope.carRoleForm = false;
        $scope.workShopRoleForm = false;
        $scope.submitted = false;
        $scope.errorMsg = false;
        $scope.result = {
            name: "",
            phone: "",
            email: "",
            make: "",
            model: "",
            repairs: "",
            files: "" 
        }

        $scope.phoneNumbr = /^\+?\d{10}$/;
        


        $scope.carRole = function () {
            $scope.carRoleForm = true;
            $scope.workShopRoleForm = false;

        }

        $scope.workShopRole = function () {
            $scope.workShopRoleForm = true;
            $scope.carRoleForm = false;

        }

        $scope.Submit = function (result) {
            var details = [];
            details.push(result);
            if ($scope.result.name == "" || $scope.result.phone == "" || $scope.result.email == "" || $scope.result.make == "" || $scope.result.model == "" || $scope.result.repairs == "") {
                $scope.errorMsg = true;
            }
            else {
                $scope.submitted = true;
            }
        }
    });
