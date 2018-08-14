import {
    API
} from '../../../Api';
import template from './CompanyDetails.template.html';
import stylesComponent from './CompanyDetails.css';
class CompanyDetailsController {
    constructor($scope, $http, $rootScope, $routeParams) {
        this.$scope = $scope;
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.$routeParams = $routeParams;
        this.booking = {};
        this.company = {};
        this.services = [];
        this.timeNow = new Date();
    }

    $onInit() {
        this.getCompany();
        this.getCompanyServices();
        this.getCompanyServices2();
        this.$scope.$on('event:AddService ', (event, data) => {
            console.log(data);
        });
        console.log(this.timeNow);

    }
    getCompany() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.company = response.data;
            console.log(response.data);

        });
    }
    getCompanyServices() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.services = response.data.services;
            console.log(this.services);
        });
    }
    getCompanyServices2() {
        const url = `${API.base}${API.services}`;
        var id = this.$routeParams.id;
        this.$http.get(url).then((response) => {
            this.services2 = response.data.filter(function (serv2) {
                if (serv2.companyId === id) {
                    return true;
                }
            });

            console.log(this.services2);
        });
    }

    bookNumber(service, id) {
        console.log(id);

        console.log('hello this is:', service);
        this.service = service;
        this.serviceId = this.services2.indexOf(service);
        console.log(this.serviceId);

    }
    saveBooking() {
        console.log(this.booking);

    }
    sendBooking() {

        this.booking.serviceId = this.serviceId;
        const url = API.base + API.bookings;
        this.booking.companyId = this.$routeParams.id;
        let dateDay = this.booking.date.toDateString();
        this.booking.dateDay = dateDay;
        console.log(dateDay);

        console.log(this.booking.companyId);
        console.log(this.booking.serviceId);
        console.log(this.booking.date.toDateString());
        console.log(this.booking.hours);
        

        this.$http.post(url, this.booking).then((response) => {
            console.log(response.data);    
        });
        const urlDate = API.base + API.dates;
        this.$http.post(urlDate, this.booking).then((response) => {
            console.log(response.data);

        });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('book-time').value = '';
        // document.getElementById('book-hours').value = '';

    }
}

const bindings = {

};

export const clientCompanyDetailsComponent = {
    controller: CompanyDetailsController,
    template,
    bindings
}