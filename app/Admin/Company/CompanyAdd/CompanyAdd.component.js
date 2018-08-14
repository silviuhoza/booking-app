import {
    API
} from '../../../Api';
import template from './CompanyAdd.template.html';
import stylesComponent from './CompanyAdd.css';

class CompanyAddController {
    constructor($scope, $rootScope, $http, $routeParams) {
        this.company = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$routeParams = $routeParams;
        this.$http = $http;
        this.title = "Your company profile looks like this:";
    }

    $onInit() {
        this.getCompanies();


    }

    addCompany() {
        this.company.userId = Number(this.$routeParams.id);
        const url = API.base + API.companies;

        this.$http.post(url, this.company).then((response) => {
            // this.$rootScope.$broadcast('event:CompanyAdd', response.data);
            console.log(response.data.id);
            this.idAdd = response.data.id;
            console.log(this.idAdd);

        });

        document.getElementById('companyUrlImage').value = '';
        document.getElementById('companyName').value = '';
        document.getElementById('descriptionCompany').value = '';




    }

    getCompanies() {
        const url = `${API.base}${API.companies}`
        this.$http.get(url).then((response) => {
            this.companies = response.data;
            console.log(this.companies);

            this.userCompanies = this.companies.filter((company) => {

                let id = Number(this.$routeParams.id);


                if (company.userId === id) {
                    
                    return company;
                }
            });
            console.log(this.userCompanies);


        });

    }
    cancel() {
        this.company = {};
        console.log('salut din cancel');

    }
}


const bindings = {
    user: '<',
    title:'@'
};

export const companyAddComponent = {
    controller: CompanyAddController,
    controllerAs: '$ctrl',
    template,
    bindings
}