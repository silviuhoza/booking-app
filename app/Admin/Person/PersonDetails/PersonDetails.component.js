import { API } from '../../../Api';
import template from './PersonDetails.template.html'

class PersonDetailsController {
    constructor($http, $location, $routeParams) {
        this.person = {};
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
}


export const personDetailsComponent = {
    controller: PersonDetailsController,
    template,
}
