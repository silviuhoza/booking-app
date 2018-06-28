import template from './AddService.template.html';
import stylesComponent from './AddService.css';

class AddServiceController {
    constructor($rootScope) {
        this.title = 'Add new service';
        this.service = {};
        this.$rootScope = $rootScope;

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
            'price': this.service.price
        });
        document.getElementById('serviceName').value = '';
        document.getElementById('serviceDuration').value = '';
        document.getElementById('availability').value = '';
        document.getElementById('descriptionService').value = '';
        document.getElementById('spaces').value = '';
        document.getElementById('price').value = '';
        this.service = {};
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