import { API } from '../../../Api';
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
        



    }

    $onInit() {

        this.getCompany();
        this.getCompanies();
        this.getServices();


    }

    getCompany() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.company = response.data;
            console.log(response.data);
            
        });


    }
    getCompanies() {
        const url = API.base + API.companies;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            this.companies = response.data;
        });
    }
    getServices() {
        const url = API.base + API.services;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            console.log(this.company.id);
            var companyId = this.$routeParams.id;
            
            this.services = response.data.filter((service) => {
                if (service.companyId === companyId) {
                    return true;
                }
               
            });
            console.log(this.services);
           
            
        });
    }

    

    addService() {
        this.getServices();
        console.log(this.service);

         const url = `${API.base}${API.companies}/${this.$routeParams.id}/${API.services}`;
         this.$http.post(url, this.service).then((response) => {
             console.log('This is response data form post services', response.data);
         });

        document.getElementById('serviceName').value = '';
        document.getElementById('serviceDescription').value = '';
        document.getElementById('serviceAvailability').value = '';
        document.getElementById('serviceDuration').value = '';
        document.getElementById('serviceSpaces').value = '';
        document.getElementById('servicePrice').value = '';
       
        this.getServices();
       
    }
    deleteCompany() {
      
        const url = `${API.base}${API.companies}/${this.company.id}`
        this.$http.delete(url).then((response) => {
           

            this.companies.splice(this.company.id, 1);
          

        });


    }
    selectCompany() {
        this.selectedCompany = this.company;
        console.log(this.selectedCompany);

         this.id = this.company.id;
         console.log(this.id );
    }

    done() {
       
        const url = `${API.base}${API.companies}/${this.id}`;
        this.$http.put(url, this.selectedCompany).then((response) => {

        });
    }

    

}

const bindings = {

}
export const dashboardAddServiceComponent = {
    controller: AddServiceController,
    controllerAs: '$ctrl',
    template,
    bindings
}