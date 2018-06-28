import template from './DashboardListService.template.html';
import componentStyles from './DashboardListService.css';

class DashboardListController {
    constructor($scope) {
        this.service = [];
        this.$scope = $scope;
        //  this.$ctrl = $ctrl;
    }

    $onInit() {

        this.$scope.$on('event:AddService', (event, data) => {
            console.log(data);
            this.service.push(data);
            console.log(this.service);

        });
    }
    delete(service) {
        var id = this.service.indexOf(service);
        this.service.splice(id, 1);
    }
    edit(service){
    console.log(service);
    
        
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