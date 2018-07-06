import {
    API
} from '../../../Api';
import template from './CompanyAdd.template.html';
import stylesComponent from './CompanyAdd.css';

class CompanyAddController {
    constructor($scope, $rootScope, $http) {
        this.company = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.title = "Your company profile looks like this:";
    }

    $onInit() {
      
       

    }

    addCompany() {

        const url = API.base + API.companies;

        this.$http.post(url, this.company).then((response) => {
            this.$rootScope.$broadcast('event:CompanyAdd', response.data);
            console.log(response.data.id);
            this.idAdd = response.data.id;
            console.log(this.idAdd);
            
        });
        //  console.log(this.company);
        //  this.$rootScope.$broadcast('event:CompanyAdd', this.company);
        //     console.log(this.company);
            


        document.getElementById('companyUrlImage').value = '';
        document.getElementById('companyName').value = '';
        document.getElementById('descriptionCompany').value = '';

        //  this.getCompany()


    }

    getCompany() {
        const url = `${API.base}${API.companies}/${this.idAdd}`
        this.$http.get(url).then((response) => {
            this.company = response.data;
            console.log(response.data);

        });
    }
    cancel() {
        this.company = {};
        console.log('salut din cancel');

    }
}


const bindings = {
    user: '<'
};

export const companyAddComponent = {
    controller: CompanyAddController,
    controllerAs: '$ctrl',
    template,
    bindings
}