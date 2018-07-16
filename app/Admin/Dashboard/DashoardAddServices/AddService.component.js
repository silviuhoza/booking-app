import {
    API
} from '../../../Api';
import template from './AddService.template.html';
import stylesComponent from './AddService.css';

class AddServiceController {
    constructor($scope, $rootScope, $routeParams, $http) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.title = 'Add new service';
        this.company = {};
        this.service = {};
        this.companies = [];
        // this.company.services = [];
        this.companyServices = [];



    }

    $onInit() {

        this.getCompany();
        // this.getServices();
        this.getCompanies();


    }

    getCompany() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.company = response.data;
            console.log(response.data);
            // this.serv = this.company.services;
        });


    }
    getCompanies() {
        const url = API.base + API.companies;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            this.companies = response.data;
        });
    }

    // getServices() {
    //     // this.$routeParams.id = this.services.companyId;
    //     const url = `${API.base}${API.services}/${this.$routeParams.id}`
    //     this.$http.get(url).then((response) => {
    //         this.services = response.data;
    //         console.log('hello din services');
    //         console.log(this.services.companyId);

    //     });
    // }

    addService() {
        console.log(this.service);
        // this.company.services = [];
        // this.company.services.push(this.service);
        this.companyServices.push(this.service);
        this.company.services = this.companyServices;
        console.log(this.company.services);
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.put(url, this.company).then((response) => {
            console.log(response.data);

        });

        document.getElementById('serviceName').value = '';
        document.getElementById('serviceDescription').value = '';
        document.getElementById('serviceAvailability').value = '';
        document.getElementById('serviceDuration').value = '';
        document.getElementById('serviceSpaces').value = '';
        document.getElementById('servicePrice').value = '';
        // location.reload();
    }
    deleteCompany() {
      
        const url = `${API.base}${API.companies}/${this.company.id}`
        this.$http.delete(url).then((response) => {
            // var idx = this.companies.indexOf(this.company.id);
            // console.log(idx);

            this.companies.splice(this.company.id, 1);
          

        });


    }
    selectCompany() {
        // console.log(this.company);
        this.selectCompany = this.company;
        console.log(this.selectCompany);


    }

    // addService2() {
    //     // console.log(this.service);

    //     this.service.companyId = this.$routeParams.id;

    //     const url = `${API.base}${API.services}`
    //     this.$http.post(url, this.service).then((response) => {
    //         console.log(response.data);

    //     });

    //     document.getElementById('serviceName').value = '';
    //     document.getElementById('serviceDescription').value = '';
    //     document.getElementById('serviceAvailability').value = '';
    //     document.getElementById('serviceDuration').value = '';
    //     document.getElementById('serviceSpaces').value = '';
    //     document.getElementById('servicePrice').value = '';

    // }


}

const bindings = {

}
export const dashboardAddServiceComponent = {
    controller: AddServiceController,
    controllerAs: '$ctrl',
    template,
    bindings
}