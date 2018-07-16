import {
    API
} from '../../../Api';
import template from './PersonDetails.template.html'

class PersonDetailsController {
    constructor($http, $location, $routeParams) {
        this.person = {};
        this.personService = [];
        this.$http = $http;
        this.$location = $location;
        this.$routeParams = $routeParams;

    }

    $onInit() {

        this.getPerson();
    }

    getPerson() {
        const url = `${API.base}${API.people}/${this.$routeParams.id}`
        this.$http.get(url).then((response) => {
            this.person = response.data;
        })
    }
    edit() {
        console.log(this.street);
        this.personService.push(this.street);
        console.log(this.personService);
        this.person.street = this.personService;
        const url = `${API.base}${API.people}/${this.$routeParams.id}`
        this.$http.put(url, this.person).then((response) => {
            console.log(response.data);
            
            this.person = response.data;
            
        })
    }
}


export const personDetailsComponent = {
    controller: PersonDetailsController,
    template,
}