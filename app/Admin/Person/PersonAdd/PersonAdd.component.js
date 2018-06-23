import { API } from '../../../Api';
import template from './PersonAdd.template.html'

class PersonAddController {
    constructor($http) {
        this.person = {};
        this.$http = $http;
    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);
    }

    onSubmit() {
        const url = API.base + API.people
        this.$http.post(url, this.person).then((response) => {

        })
    }
}

const bindings = {

}

export const personAddComponent = {
    controller: PersonAddController,
    template,
}
