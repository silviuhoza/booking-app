import {API} from '../../../Api';
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
    }

    $onInit() {
        this.getCompany();
        this.getCompanyServices();
        this.$scope.$on('event:AddService ' , (event, data) =>{
            console.log(data);
        })
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

    bookNumber(service,id){
        console.log(id);
        
        console.log('hello this is:', service);
        this.service = service;
        this.serviceId = this.services.indexOf(service);
        console.log(this.serviceId);
        
    }
    saveBooking() {
        console.log(this.booking);
        
    }
    sendBooking() {
       
        this.booking.serviceId = this.serviceId;
        const url = API.base + API.bookings;
        this.booking.companyId = this.$routeParams.id;
       
        console.log(this.booking.companyId);
        console.log(this.booking.serviceId);
        
        this.$http.post(url, this.booking).then((response) => {
            console.log(response.data);    
        });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('date').value = '';

    }
}

const bindings = {

};

export const clientCompanyDetailsComponent = {
    controller: CompanyDetailsController,
    template,
    bindings
}