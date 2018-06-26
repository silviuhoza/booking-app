import { API } from '../../../Api';
import template from './PersonList.template.html'

class PersonListController {
    constructor($http, $scope) {
        this.personList = [];
        this.$http = $http;
        this.$scope = $scope;
    }

    $onInit() {
        this.getPeople();
        this.$scope.$on('event:PersonAdd', (event, data) => {
            console.log('eventData: ', data);
        });
    }

    getPeople() {
        const url = API.base + API.people
        this.$http.get(url).then((response) => {
            this.personList = response.data;
        });
    }

    deletePerson(person) {
        const url = `${API.base}${API.people}/${person.id}`
        this.$http.delete(url).then((response) => {
            this.getPeople();
        });
    }
}

const bindings = {

}

export const personListComponent = {
    controller: PersonListController,
    template,
}
