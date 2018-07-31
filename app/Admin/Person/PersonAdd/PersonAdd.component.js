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
        this.$http.post(url, this.person).then((response) => {
            this.$rootScope.$broadcast('event:PersonAdd', response.data);
             console.log(response.data);
        });
     
         document.getElementById('firstName').value = '';
         document.getElementById('lastName').value = '';
         document.getElementById('age').value = '';
    }
}

const bindings = {

}

export const personAddComponent = {
    controller: PersonAddController,
    template,
    bindings
}