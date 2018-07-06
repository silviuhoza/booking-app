import { API } from '../../../Api';
import template from './AddService.template.html';
import stylesComponent from './AddService.css';

class AddServiceController {
    constructor($scope, $rootScope, $routeParams,$http) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.title = 'Add new service';
        this.service = [];
        this.form = true;
    }

    $onInit() {
       this.$scope.$on('event:CompanyAdd',  (event, data ) => {
           console.log(data);
           
       });

    }

    addService() {
console.log(this.service);
         
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`
        this.$http.post(url, this.service).then((response) => {
            // this.$rootScope.$broadcast('event:AddService', response.data);
            console.log(response.data);
        });

        // this.$rootScope.$broadcast('event:AddService', {
        //     'name': this.service.name,
        //     'duration': this.service.duration,
        //     'availability': this.service.availability,
        //     'description': this.service.description,
        //     'spaces': this.service.spaces,
        //     'price': this.service.price,
        //     'form': false
        // });
       
        document.getElementById('serviceName').value = '';
        document.getElementById('serviceDescription').value = '';
        document.getElementById('serviceAvailability').value = '';
        document.getElementById('serviceDuration').value = '';
        document.getElementById('serviceSpaces').value = '';
        document.getElementById('servicePrice').value = '';
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