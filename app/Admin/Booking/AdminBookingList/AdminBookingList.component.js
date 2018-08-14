import template from './AdminBookingList.template.html';
import componentStyles from './AdminBookingList.css';
import { API } from '../../../Api';

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

            let bookingsCopy = this.bookings;
            this.date = this.bookings.map(booking => {
                let bookingDate = {};
                // console.log(new Date(booking.date).getHours(),':', new Date(booking.date).getMinutes());
                
                bookingDate.list = bookingsCopy.filter(item => {
                    return (new Date(booking.date).getMonth() === new Date(item.date).getMonth() &&
                        new Date(booking.date).getDay() === new Date(item.date).getDay()&& 
                        new Date(booking.date).getHours() === new Date(item.date).getHours() &&
                        new Date(booking.date).getMinutes() === new Date(item.date).getMinutes()
                    );
                });

                bookingDate.dayName = new Date(booking.date).toLocaleDateString("ro-RO", {
                    weekday: "long"
                });
                // console.log('hello from bookingDate.list : ', new Date(booking.date).getMonth());

                // if (bookingDate.list.length) {
                //     bookingDate.list.map(booking => {
                //         const indexToRemove = bookingsCopy.findIndex(element => {
                //             return (booking.id === element.id);
                //         });
                //         if (indexToRemove) {
                //             bookingsCopy = bookingsCopy.slice(0, indexToRemove);
                //         }
                //     });
                // }

                
                // let options = {
                //     weekday: 'long',
                //     year: 'numeric',
                //     month: 'long',
                //     day: 'numeric'
                // };

                // bookingDate.date = booking.date;
                // bookingDate.label =

                var date = new Date(booking.date);
                // console.log(date.getDay());
                // let days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday']
                // this.day = days[date.getDay()];
                // console.log(date.getDate());
                // this.dateDay = date.getDate();
                // console.log(date.getMonth());
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                this.month = months[date.getMonth()];

                //    return date.toLocaleDateString('ro-RO', options);
                // return date.toDateString('ro-RO', options);
                return bookingDate;
            });


            console.log(this.date);

            console.log(this.bookings);

            // this.bookings.day = this.day;
            // console.log(this.bookings.day);

            // this.bookings.dateDay = this.dateDay;
            // console.log(this.bookings.dateDay);

            // this.bookings.month = this.month;
            // console.log(this.bookings.month);


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

            var dates = this.dates;
            console.log('hello from dates variable', dates);
        });



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