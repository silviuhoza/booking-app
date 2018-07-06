import {$routeProvider, $locationProvider} from 'angular-route';

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/register', {
            templateUrl: 'Pages/Register.html'
        })
        .when('/login', {
            templateUrl: 'Pages/Login.html'
        })
        .when('/client', {
            templateUrl: 'Pages/Client.html'
        })
        .when('/companies/:id', {
            templateUrl: 'Pages/ClientCompanyDetails.html'
        })
        .when('/admin/companies/:id', {
            templateUrl: 'Pages/AdminCompanyDetails.html'
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
        
        .otherwise('/client',{
           templateUrl: 'Pages/Client.html'
        })
}

export default appConfig;
