import template from './CompanyList.template.html';
import stylesComponent from './CompanyList.css';
class CompanyListController {
    constructor($scope, $rootScope) {
        this.service = [{
                name: 'Tuns',
                description: "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată.",
                availability: 'Mon-Fri, 8:00-16:00',
                duration: '1 hour',
                spaces: '3 locuri',
                price: '23 de lei'
            },
            {
                name: 'Coafura',
                description: "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. ",
                availability: 'Mon-Fri, 8:00-16:00',
                duration: '1.5 hour',
                spaces: '3 locuri',
                price: '45 de lei'
            }
        ];

        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.booking = {};
    }

    $onInit() {

        console.log('hello from list component');

        
        this.$scope.$on('someEvent', function (event, data) {
           
            console.log(data);
            
        });
        
    }

    sendBooking(){
        console.log(this.booking);
        
    }
}

const bindings = {

};
export const companyListComponent = {
    controller: CompanyListController,
    controllerAs: '$ctrl',
    template,
    bindings
};