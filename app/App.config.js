import {$routeProvider, $locationProvider} from 'angular-route';

function appConfig($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/register', {
            templateUrl: 'Pages/AdminPages/Register.html'
        })
        .when('/login', {
            templateUrl: 'Pages/AdminPages/Login.html'
        })
        .when('/client', {
            templateUrl: 'Pages/ClientPages/Client.html'
        })
        .when('/companies/:id', {
            templateUrl: 'Pages/ClientPages/ClientCompanyDetails.html'
        })
        .when('/admin/companies/:id', {
            templateUrl: 'Pages/AdminPages/AdminCompanyDetails.html'
        })
        .when('/admin/companies/:id/servicelist', {
            templateUrl: 'Pages/AdminPages/AdminServiceList.html'
        })
        .when('/admin/companies/:id/bookinglist/:serviceId', {
            templateUrl: 'Pages/AdminPages/Booking.html'
        })
        .when('/people', {
            templateUrl: 'Pages/People.html'
        })
        .when('/people/:id', {
            templateUrl: 'Pages/PersonDetails.html'
        })
        .when('/profile', {
            templateUrl: 'Pages/MyCompany.html'
        })
        .when('/booking', {
            templateUrl: 'pages/Booking.html'
        })
        .when('/dashboard', {
            templateUrl: 'pages/AdminPages/Dashboard.html'
        })
        
        .otherwise('/client',{
           templateUrl: 'Pages/ClientPages/Client.html'
        })
}

export default appConfig;
