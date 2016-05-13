// VoithNewsApp App

angular.module('BarcodeScannerApp', ['ionic'])

    .run(function ($ionicPlatform, $rootScope, $ionicLoading, $http, AppConstants) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
/*
        $rootScope.$on('loading:show', function () {
            $ionicLoading.show({ template: 'Loading..' })
        })

        $rootScope.$on('loading:hide', function () {
            $ionicLoading.hide()
        })

*/
    })

    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider, $provide) {
/*
        $httpProvider.interceptors.push(function ($rootScope) {
            return {
                request: function (config) {
                    $rootScope.$broadcast('loading:show')
                    return config
                },
                response: function (response) {
                    $rootScope.$broadcast('loading:hide')
                    return response
                }
            }
        });
        */

        $ionicConfigProvider.views.maxCache(0);
        $provide.decorator('$state', function ($delegate, $stateParams) {
            $delegate.forceReload = function () {
                return $delegate.go($delegate.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            };
            return $delegate;
        });

        $stateProvider


            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            }) 
             .state('app.scandata', {
                url: '/scandata',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/scanData.html',
                        controller: 'ScanDataResultCtrl'
                    }
                }
            })    

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
    
