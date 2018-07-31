import template from './AdminBookingList.template.html';
import componentStyles from './AdminBookingList.css';
import {
    API
} from '../../../Api';

class AdminBookingListController {
    constructor($http, $routeParams, $scope) {
        this.name = 'Your list of bookings';
        this.$http = $http;
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.bookings = [];


    }

    $onInit() {
        this.getDates();
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
                if (service.companyId === id) {
                    return true;
                }
            });
            console.log(this.services);

            this.serviceName = this.services[this.$routeParams.serviceId].name;
            this.serviceDuration = this.services[this.$routeParams.serviceId].duration;
            console.log(this.services);
            console.log(this.companyId);
            console.log(this.serviceId);


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


            this.bookings = response.data.filter(function (book2) {
                if (book2.companyId === id && book2.serviceId === Serviceid) {
                    return true;
                }
            });
            console.log(this.bookings);
            this.date = this.bookings.map(element => {
                console.log(element.date);

                var options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };

                var date = new Date(element.date);

                console.log(date.getDay());
                console.log(date.getDate());
                console.log(date.getMonth());

                //    return date.toLocaleDateString('ro-RO', options);
                return date.toDateString('ro-RO', options);
            });
            console.log(this.date);
        });
    }

    getDates() {
        console.log('hello from get dates');

        const url = `${API.base}${API.dates}`;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            this.dates = response.data;
            console.log(this.dates);

            this.day = this.dates.filter((day) => {
                console.log(day.dateDay);
                return true;

            });
            this.day.forEach(day => {
                console.log(day.dateDay);
                
            });

        });
        var dates = this.dates;
        console.log('hello from dates variable', dates);

        // this.day = dates.filter((day) => {
        //     console.log(day);

        // });
    }



}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminBookingListComponent = {
    controller: AdminBookingListController,
    controllerAs: '$ctrl',
    template,
    bindings
}