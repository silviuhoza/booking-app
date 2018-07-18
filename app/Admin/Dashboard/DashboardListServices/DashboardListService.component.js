import template from './DashboardListService.template.html';
import componentStyles from './DashboardListService.css';
import { API } from '../../../Api';

class DashboardListController {
    constructor($scope, $rootScope, $http, $routeParams) {
        
        this.services = [];
        this.company = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$routeParams = $routeParams;
        this.$http = $http;

    }

    $onInit() {

        this.$scope.$on('event:AddService', (event, data) => {
            console.log(data);
            this.service.unshift(data);
            console.log(this.service);
            this.form = data.form;
        });

        this.$scope.$on('event:editDataService', (event, editData, id) => {
            console.log(editData);
            // this.service = editData
            this.id = id;
            console.log(this.id);
            console.log(this.service[this.id]);
            this.service[this.id] = {
                'name': editData.name,
                'duration': editData.duration,
                'availability': editData.availability,
                'description': editData.description,
                'spaces': editData.spaces,
                'price': editData.price
            };
        });

            this.getServices();

    }
    getServices(){
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`;
        this.$http.get(url).then((response) =>{
            this.company = response.data;
            this.services = response.data.services;
            console.log(this.services, this.company);
            
        })
    }

    gotId(service){
        this.serviceId = this.services.indexOf(service);
        console.log(this.serviceId);
        // console.log(service.name);
       
      
    }

    deleteService(service) {
         var id = this.services.indexOf(service);
         this.company.services.splice(id, 1);
         console.log(this.company.services);
         
        const url = `${API.base}${API.companies}/${this.company.id}`;
        this.$http.put(url, this.company).then((response) => {
           
        });

    }
    selectService(service) {
        var id = this.services.indexOf(service);
        this.clickedService = service;

        this.$rootScope.$broadcast('event:editService', {
            'name': service.name,
            'duration': service.duration,
            'availability': service.availability,
            'description': service.description,
            'spaces': service.spaces,
            'price': service.price

        }, id);
    }

    done(){
        console.log('salut ');
        this.company.services = this.services;
         console.log(this.company.services);
         const url = `${API.base}${API.companies}/${this.$routeParams.id}`;
         this.$http.put(url, this.company).then((response) => {
            
         });
    }

}



const bindings = {

}
export const dashboardListComponent = {
    controller: DashboardListController,
    controllerAs: '$ctrl',
    template,
    bindings
}