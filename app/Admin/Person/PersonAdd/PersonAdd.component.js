import { API } from '../../../Api';
import template from './PersonAdd.template.html'

class PersonAddController {
    constructor($http, $scope, $rootScope) {
        this.person = {};
        this.$http = $http;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }

    onSubmit() {
        const url = API.base + API.people;
        this.$rootScope.$broadcast('event:PersonAdd', { eventData: 'The person was added' });
        this.$http.post(url, this.person).then((response) => {

        });
    }
}

const bindings = {

}

export const personAddComponent = {
    controller: PersonAddController,
    template,
}