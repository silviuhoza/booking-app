import template from './DashboardEditService.template.html';
import stylesComponent from './DashboardEditService.css';


class DashboardEditServiceController {
    constructor($scope, $rootScope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }
    $onInit() {
        this.$scope.$on('event:editService', (event, data, id) => {

            this.clickedService = data;
            console.log(this.clickedService);
            console.log(id);
            this.id = id;
            
        });

    }
    done() {
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
export const clientDashboardEditServiceComponent = {
    controller: DashboardEditServiceController,
    template,
    bindings
}