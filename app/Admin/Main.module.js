import angular from 'angular';

// AUTH
import { adminLoginComponent } from './Auth/AdminLogin/AdminLogin.component';
import { adminRecoverComponent } from './Auth/AdminRecover/AdminRecover.component';
import { adminRegisterComponent } from './Auth/AdminRegister/AdminRegister.component';

// BOOKING
import { adminBookingComponent } from './Booking/AdminBooking/AdminBooking.component';
import { adminBookingListComponent } from './Booking/AdminBookingList/AdminBookingList.component';



//DASHBOARD
import { dashboardListComponent} from './Dashboard/DashboardListServices/DashboardListService.component';
import {dashboardAddServiceComponent } from './Dashboard/DashoardAddServices/AddService.component';
import {dashboardEditServiceComponent} from './Dashboard/DashboardEditService/DashboardEditService.component'

// Company
import { companyAddComponent } from './Company/CompanyAdd/CompanyAdd.component';
import { companyListComponent } from './Company/CompanyList/CompanyList.component';
import { companyDetailsComponent } from './Company/CompanyDetails/CompanyDetails.component';

 export default angular.module('Admin', [
     'ngRoute'
 ])
    .component('adminLoginComponent', adminLoginComponent)
    .component('adminRecoverComponent', adminRecoverComponent)
    .component('adminRegisterComponent', adminRegisterComponent)
    .component('adminBookingComponent', adminBookingComponent)
    .component('adminBookingListComponent', adminBookingListComponent)
    .component('dashboardListComponent', dashboardListComponent)
    .component('dashboardAddServiceComponent', dashboardAddServiceComponent)
    .component('dashboardEditServiceComponent', dashboardEditServiceComponent)
    .component('companyAddComponent', companyAddComponent)
    .component('companyListComponent', companyListComponent)
    .component('companyDetailsComponent', companyDetailsComponent)