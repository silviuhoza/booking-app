import template from './DashboardListService.template.html';
import componentStyles from './DashboardListService.css';

class DashboardListController {
    constructor($scope, $rootScope) {
        this.service = [{
                name: 'Tuns',
                description: "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii  odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum",
                availability: 'Jun, 30 2018',
                duration: '1 hour',
                spaces: '3 locuri',
                price: '23 de lei'
            },
            {
                name: 'Coafura',
                description: "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. ",
                availability: 'Jun, 14 2018',
                duration: '1.5 hour',
                spaces: '3 locuri',
                price: '45 de lei'
            }
        ];
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.form = true;




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


    }


    delete(service) {
        var id = this.service.indexOf(service);
        this.service.splice(id, 1);
    }
    selectService(service) {
        var id = this.service.indexOf(service)
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

}



const bindings = {

}
export const clientDashboardListComponent = {
    controller: DashboardListController,
    controllerAs: '$ctrl',
    template,
    bindings
}