import template from './DashboardEditService.template.html';
import stylesComponent from './DashboardEditService.css';


class DashboardEditServiceController {
    constructor($scope, $rootScope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }
    $onInit() {
        this.$scope.$on('event:editService', (event, data) => {
           
            this.clickedService = data;
            // console.log(this.clickedService);
        });
        // this.$rootScope.$broadcast('event:editDataService', {
        //     'name': this.clickedService,
        //     'duration': this.clickedService,
        //     'availability': this.clickedService,
        //     'description': this.clickedService,
        //     'spaces': this.clickedService,
        //     'price': this.clickedService

        // });
    }

    
}
const bindings = {

}
export const dashboardEditServiceComponent = {
    controller: DashboardEditServiceController,
    controllerAs: '$ctrl',
    template,
    bindings
}