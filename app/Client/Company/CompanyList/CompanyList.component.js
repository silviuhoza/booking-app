import {
    API
} from '../../../Api';
import template from './CompanyList.template.html';
import stylesComponent from './CompanyList.css';
class CompanyListController {
    constructor($scope, $rootScope, $http) {

        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.booking = {};
        this.$http = $http;
        this.companies = {};
    }

    $onInit() {
        this.getCompanies();


    }


    getCompanies() {
        const url = API.base + API.companies
        this.$http.get(url).then((response) => {
            this.companies = response.data;
            // console.log(response.data);

        });
    }

}

const bindings = {

};
export const clientCompanyListComponent = {
    controller: CompanyListController,
    template,
    bindings
};