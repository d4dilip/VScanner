// NewsCtrl 
(function() {
    angular
        .module('BarcodeScannerApp')
        .controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = ['$scope', 'AppConstants', '$http', '$ionicPopup','$location'];

    function HomeCtrl($scope, AppConstants, $http, $ionicPopup,$location) {
        var vm = this;
        $scope.OpenExtLink = OpenExtLink;
        $scope.Scan = Scan;
      //  Scan(); 
       var result = new Object();


        function OpenExtLink(url) {
            alert(url);
            window.open(url, "_system", "location=yes");
        }
        function Scan() {


            cordova.plugins.barcodeScanner.scan(
                function(result) {
                      var dd= JSON.parse(result.text);
                       localStorage.setItem("SCANNDATA",JSON.stringify(dd));
                       $location.path("app/scandata");
                },
                function(error) {
                   alert("Scanning failed: " + error);
                }
            );
      
        }
    }
})();
