import { API } from '../../../Api';
import template from './AdminBooking.template.html'
import componentStyles from './AdminBooking.css'

class AdminBookingController {
    constructor($http, $routeParams, $scope) {
        this.name = 'Your list of bookings';
        this.$http = $http;
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.bookings = [];


    }

    $onInit() {
        this.getservices();
        this.getBookings();
       
       
    }
    getservices() {

        const url = `${API.base}${API.services}`
        this.$http.get(url).then((response) => {
            this.companyId = response.data.id;

            this.serviceId = Number(this.$routeParams.serviceId);
            console.log(this.serviceId);

            var id = this.$routeParams.id;
            console.log(id);
            this.services = response.data.filter((service) => {
                if (service.companyId === id ) {
                    return true;
                }
            });
            console.log(this.services);
            
            this.serviceName = this.services[this.$routeParams.serviceId].name;
            this.serviceDuration = this.services[this.$routeParams.serviceId].duration;
           
        });
    }
    getBookings() {
        const url = `${API.base}${API.bookings}`;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            
           
            var id = this.$routeParams.id;
            console.log(id);
            var Serviceid = this.serviceId;
            console.log(Serviceid);


            this.bookings2 = response.data.filter(function (book2) {
                if (book2.companyId === id && book2.serviceId === Serviceid) {
                    return true;
                }
            });
            console.log(this.bookings2);

        });

    }



    date() {
        this.date = 'date';

    }
}

const bindings = {
   
}

export const adminBookingComponent = {
    controller: AdminBookingController,
    controllerAs: '$ctrl',
    template,
    bindings
}