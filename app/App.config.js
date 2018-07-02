import {$routeProvider, $locationProvider} from 'angular-route';

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/test', {
            templateUrl: 'Pages/Test.html'
        })
        .when('/people', {
            templateUrl: 'Pages/People.html'
        })
        .when('/people/:id', {
            templateUrl: 'Pages/PersonDetails.html'
        })
        .when('/profile', {
            templateUrl: 'Pages/CompanyProfile.html'
        })
        .when('/booking', {
            templateUrl: 'pages/Booking.html'
        })
        .when('/dashboard', {
            templateUrl: 'pages/Dashboard.html'
        })
        
        .otherwise({
            redirectTo: '/'
        })
}

export default appConfig;
