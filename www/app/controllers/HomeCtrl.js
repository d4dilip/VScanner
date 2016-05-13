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
                       var scannedData = result.text;
                        $scope.scandata = result.text;
                      var dd= JSON.parse(d);
                       localStorage.setItem("SCANNDATA",JSON.stringify(dd));
                       $location.path("app/scandata");
                },
                function(error) {
                   alert("Scanning failed: " + error);
                }
            );
         
        //   var d = '{"VoithQRCodeData":{"EccLevel":"L","Height":462,"Width":462,"AppCode":"APP Code 001","Data":[{"Type":"NUMBER","Content":"1234567890","Key":"NUMBER"},{"Type":"SMS","Content":"1234567890","Key":"SMS"},{"Type":"URL","Content":"Http://Voith.com","Key":"URL"},{"Type":"TEL","Content":"1234567890","Key":"TEL"},{"Type":"STRING","Content":"I am a string","Key":"STRING"}]}}';
        //    var dd= JSON.parse(d);
        //     // result.format = "QRCode";
        //     // result.Cancelled = false;
        //     // var scannedData = result.text;
        //     // $scope.scandata = result.text;
        //     localStorage.setItem("SCANNDATA",JSON.stringify(dd));
        //       //  alert(JSON.stringify($scope.scandata));
        //       $location.path("app/scandata");
        //     // $ionicPopup.alert({
            //     title: 'Scan Data',
            //     templateUrl: 'templates/scanData.html',
            //     scope: $scope

            // }).then(function(res) {
            //     console.log('Test Alert Box');
            // });
 


            // cordova.plugins.barcodeScanner.scan(
            //     function(result) {
            //         $scope.scandata = "We got a barcode\n" +
            //             "Result: " + result.text + "\n" +
            //             "Format: " + result.format + "\n" +
            //             "Cancelled: " + result.cancelled;
            //     },
            //     function(error) {
            //         $scope.scandata = "Scanning failed: " + error;
            //     }
            // );
        }
    }
})();
