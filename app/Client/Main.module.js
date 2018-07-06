import angular from 'angular';

//DASHBOARD
import { clientDashboardListComponent } from './Dashboard/DashboardListServices/DashboardListService.component';

import {clientDashboardEditServiceComponent} from './Dashboard/DashboardEditService/DashboardEditService.component'

// Company

import {clientCompanyListComponent} from './Company/CompanyList/CompanyList.component';
import {clientCompanyDetailsComponent} from './Company/CompanyDetails/CompanyDetails.component';




export default angular.module('Client', [
        'ngRoute'
    ])
    .component('clientDashboardListComponent', clientDashboardListComponent)
    
    .component('clientDashboardEditServiceComponent', clientDashboardEditServiceComponent)
    
    .component('clientCompanyListComponent', clientCompanyListComponent)
    .component('clientCompanyDetailsComponent', clientCompanyDetailsComponent)