import template from './DashboardEditService.template.html';
import stylesComponent from './DashboardEditService.css';
import {
    API
} from '../../../Api';

class DashboardEditServiceController {
    constructor($scope, $rootScope, $http, $routeParams) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.company = {};
        
    }
    $onInit() {
        this.$scope.$on('event:editService', (event, data, id) => {

            this.clickedService = data;
            console.log(this.clickedService);
            console.log(id);
            this.id = id;
        });
        this.getCompany();

    }
    getCompany() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.company = response.data;
            this.serv = this.company.services;
            console.log(this.serv);
            // this.clickedService = this.serv;
        });
    }
   

    done() {
        this.company.services = this.services;
        console.log(this.company.services);
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`;
        this.$http.put(url, this.company).then((response) => {
            //  this.services = response.data.services;
        });
    }

    done1() {
        this.$rootScope.$broadcast('event:editDataService', {
            'name': this.clickedService.name,
            'duration': this.clickedService.duration,
            'availability': this.clickedService.availability,
            'description': this.clickedService.description,
            'spaces': this.clickedService.spaces,
            'price': this.clickedService.price

        }, this.id);
    }

}
const bindings = {

}
export const dashboardEditServiceComponent = {
    controller: DashboardEditServiceController,
    template,
    bindings
}