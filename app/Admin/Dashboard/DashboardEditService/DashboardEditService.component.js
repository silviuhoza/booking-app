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

            this.selectService = data;
            console.log(this.selectService);
            console.log(id);
            this.id = id;
        });
        // this.getServices();
        // this.selectService();
        console.log(this.$routeParams.id);
        this.nimu = this.selectService;
        console.log(this.nimu);
        


    }
    getServices() {
        const url = `${API.base}${API.services}`
        this.$http.get(url).then((response) => {
            this.services = response.data;
            this.serv = this.services.filter((serv) => {
                if (serv.companyId === this.$routeParams.id) {
                    return true;
                }
            });
            console.log(this.serv);
            // this.selectService = this.serv;
        });
    }


    done() {
        this.Service = this.selectService;
        this.Service.companyId = this.$routeParams.id;
        console.log(this.selectService);
        const url = `${API.base}${API.services}/${this.id}`;
        this.$http.put(url, this.Service).then((response) => {
            console.log(response.data);

        });
    }

    selectService(service) {
        this.exem = service;
        console.log(this.exem);

    }

    sayHelloFromThisComponent() {
        this.sayHello();

    }

}
const bindings = {
    select: '<',
    service:'<',
    sayHello: '&',
    test: '@'
}
export const dashboardEditServiceComponent = {
    controller: DashboardEditServiceController,
    template,
    bindings
}