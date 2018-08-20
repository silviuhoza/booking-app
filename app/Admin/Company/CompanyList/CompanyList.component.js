import { API } from '../../../Api';
import template from './CompanyList.template.html';
import stylesComponent from './CompanyList.css';
class CompanyListController {
    constructor( $http) {

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
           

        });
    }

}

const bindings = {

};
export const companyListComponent = {
    controller: CompanyListController,
    template,
    bindings
};