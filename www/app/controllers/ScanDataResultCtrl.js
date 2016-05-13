// NewsCtrl 
(function() {
    angular
        .module('BarcodeScannerApp')
        .controller('ScanDataResultCtrl', ScanDataResultCtrl);
    ScanDataResultCtrl.$inject = ['$scope', 'AppConstants', '$http', '$ionicPopup', '$location'];

    function ScanDataResultCtrl($scope, AppConstants, $http, $ionicPopup, $location) {
        var vm = this;
        $scope.OpenExtLink = OpenExtLink;
        $scope.goToScan = goToScan;
        LoadScanData();
        
        function goToScan() {
            localStorage.setItem("SCANNDATA",'[]');    
            $location.path("app/home");
        }

        function OpenExtLink(url) {
            alert(url);
            window.open(url, "_system", "location=yes");
        }
        function LoadScanData() {

            $scope.scandata = JSON.parse(localStorage.getItem("SCANNDATA"));
        }
    }
})();
