import template from './DashboardListService.template.html';
import componentStyles from './DashboardListService.css';
import {
    API
} from '../../../Api';

class DashboardListController {
    constructor($scope, $rootScope, $http, $routeParams) {

        // this.services = [];
        this.company = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$routeParams = $routeParams;
        this.$http = $http;

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

        this.getCompany();
        this.getServices();
        this.getBookings();

    }
    getCompany() {
        const url = `${API.base}${API.companies}/${this.$routeParams.id}`;
        this.$http.get(url).then((response) => {
            this.company = response.data;
            console.log('from getCompany', this.company);
            var id = this.$routeParams.id;
            console.log('from getCompany', id);
        });

    }

    gotId(service) {
        this.serviceId = this.services.indexOf(service);
        console.log('from gotId', this.serviceId);
        // console.log(service.name);


    }
    getServices() {
        const url = `${API.base}${API.services}`;
        this.$http.get(url).then((response) => {
            console.log('this is the response from db services :', response.data);
            var id = this.$routeParams.id;
            console.log("from getSevices id = this.$routeParams.id", id);
            let serviceId = this.serviceId
            console.log('from getSevices', 'serviceId :', serviceId);

            this.services = response.data.filter(function (serv2) {
                if (serv2.companyId === id && serv2.serviceId === serviceId) {
                    return true;
                }
            });
            console.log('from getSevices', this.services);
        });

        // var Serviceid = this.serviceId;
        // console.log(Serviceid);
        //  this.services = response.data.filter(function (serv2) {
        //      if (serv2.companyId === id && serv2.serviceId === Serviceid) {
        //          return true;
        //      }
        //  });
        //  console.log(this.services);
    }

    getBookings() {
        const url = `${API.base}${API.bookings}`;
        this.$http.get(url).then((response) => {
            console.log('from getBookings', response.data);

            var id = this.$routeParams.id;
            console.log('from getBookings', id);
            this.companyId = id;
            this.serviceId = response.data.map((service) => {
                return service.id;
            });
            console.log('from getBookings', this.serviceId);




            this.bookings2 = response.data.filter(function (book2) {
                if (book2.companyId === id) {
                    return true;
                }
            });
            console.log('from getBookings', this.bookings2);

        });

    }



    deleteService(service) {
        console.log('from delete function:', this.services);
        console.log('from delete function:', service.id);
        var id = this.services.indexOf(service);
        console.log('from delete function:', id);
        this.services.splice(id, 1);
        console.log('from delete function:', this.serviceId);
        let serviceId = this.serviceId.filter((servBook) => {
            if (servBook === id) {
                return true;
            }

        });
        console.log('from delete function this.serviceBoookings:', serviceId);
        console.log('from deelete function  companyId: ', this.companyId);



        const urlBook = `${API.base}${API.bookings}?companyId=${this.companyId}&serviceId=${ serviceId}`;
        this.$http.get(urlBook).then((response) => {
            console.log(response.data, ' rezervarile pentru serviciul acesta au fost sterse');
            this.idOfBookings = response.data.map((data) => {
                return data.id;
            });
            console.log('from delete function idurile for bookings: ', this.idOfBookings);

            this.idOfBookings.forEach((id) => {

                console.log(id);

                // const urlDeleteBookings = `${API.base}${API.bookings}/${id}`;
                // this.$http.delete(urlDeleteBookings).then((response) => {
                //    console.log( 'am fost sters');

                // });
            });

        });





        const url = `${API.base}${API.services}/${service.id}`;
        this.$http.delete(url).then((response) => {
           console.log(this.services, 'am fost sters');

        });


    }
    selectService(service) {
        console.log(this.id);
        this.clickedService = service;

        var id = this.services.indexOf(service);
        this.id = service.id;


        this.$rootScope.$broadcast('event:editService', {
            'name': service.name,
            'duration': service.duration,
            'availability': service.availability,
            'description': service.description,
            'spaces': service.spaces,
            'price': service.price

        }, id);
    }

    done() {
        console.log('salut ');
        const url = `${API.base}${API.services}/${this.id}`;
        this.$http.put(url, this.clickedService).then((response) => {

        });
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