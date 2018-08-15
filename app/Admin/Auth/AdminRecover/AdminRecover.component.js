import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.css';
import {
    API
} from "../../../Api";

class AdminRecoverController {
    constructor($http) {
        this.title = 'Recover Your Account';
        this.$http = $http;
        this.user = {};

    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);
        this.getUsers();
    }


    getUsers() {
        const url = API.base + API.user;
        this.$http.get(url).then((response) => {
            console.log(response.data);
            this.users = response.data;

        });


    }
    recover(event) {
        event.preventDefault();

        console.log(this.user);
        //erasing the data from input
        const recoverInput = document.getElementById('recoverEmail');
        recoverInput.value = '';
        // document.getElementById('recoverEmail').value = '';


        this.recoverUser = this.users.filter((user) => {
            if (user.email === this.user.email) {
                return user;
            }
        });
        console.log(this.recoverUser[0].name);
        console.log(this.recoverUser[0].password);
        console.log(this.recoverUser[0].id);

        //selecting the div where I append the new Element
        const div = document.getElementById('recover');
        // Create li element
        const p = document.createElement('p');
        //Append the text to element
        p.appendChild(document.createTextNode('You have successfuly send the recover data!'));
        //Append the element to the div
        div.appendChild(p);



    }

}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminRecoverComponent = {
    controller: AdminRecoverController,
    controllerAs: '$ctrl',
    template,
    bindings
}