import angular from 'angular';

// Company

import {clientCompanyListComponent} from './Company/CompanyList/CompanyList.component';
import {clientCompanyDetailsComponent} from './Company/CompanyDetails/CompanyDetails.component';




export default angular.module('Client', [
        'ngRoute'
    ])
    
    .component('clientCompanyListComponent', clientCompanyListComponent)
    .component('clientCompanyDetailsComponent', clientCompanyDetailsComponent)