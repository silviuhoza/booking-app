import template from './AddService.template.html';
import stylesComponent from './AddService.css';

class AddServiceController {
    constructor($scope, $rootScope) {
        this.title = 'Add new service';
        this.service = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.form = true;
    }

    $onInit() {
       

    }

    addService() {

        this.$rootScope.$broadcast('event:AddService', {
            'name': this.service.name,
            'duration': this.service.duration,
            'availability': this.service.availability,
            'description': this.service.description,
            'spaces': this.service.spaces,
            'price': this.service.price,
            'form': false
        });
       
        this.service = {};
    }
// hide(){
//     this.form = false;
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