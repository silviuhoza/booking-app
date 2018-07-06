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
        this.service = {};
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
            console.log(response.data.services);

        });
    }


    saveBooking() {
        console.log(this.booking);

    }
    sendBooking() {
        console.log(this.booking);
        this.booking = {};

    }
}

const bindings = {

};

export const companyDetailsComponent = {
    controller: CompanyDetailsController,
    template,
    bindings
}