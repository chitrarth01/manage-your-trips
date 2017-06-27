(function () {

    "use strict";

    //Getting the existing module.
    angular.module("app-trips").controller("tripsController", tripsController);

    function tripsController($http) {
        var vm = this;
        //vm.name = "Chitrarth";
        vm.trips = [];

        vm.newTrips = {};
        vm.errorMessage = "";
        vm.isBusy = true;

        $http.get("/api/trips").then(function (response) {
            //Success
            angular.copy(response.data, vm.trips);
        },
            function (error) {
                //Failure
                vm.errorMessage = "Failed to load data:" + error;
            })
            .finally(function () {
                vm.isBusy = false;

            });

        vm.addTrips = function () {
            // alert(vm.newTrips.name)
            //vm.trips.push({ name: vm.newTrips.name, created: new Date() });
            //vm.newTrips = {};
            vm.isBusy = true;
            vm.errorMessage = "";

            $http.post("/api/trips", vm.newTrips)
                .then(function (response) {
                    //Success
                    vm.trips.push(response.data);
                    vm.newTrips = {};
                },
                function () {
                    vm.errorMessage ="Failed to save the trip"
                })
                .finally(function () {
                    vm.isBusy = false;
                });
        };
    }
})();