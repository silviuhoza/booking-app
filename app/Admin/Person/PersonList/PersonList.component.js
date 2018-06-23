import { API } from '../../../Api';
import template from './PersonList.template.html'

class PersonListController {
    constructor($http) {
        this.personList = [];
        this.$http = $http;
    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);
        this.getPeople();
    }

    getPeople() {
        const url = API.base + API.people
        this.$http.get(url).then((response) => {
            this.personList = response.data;
        });
    }
}

const bindings = {

}

export const personListComponent = {
    controller: PersonListController,
    template,
}
