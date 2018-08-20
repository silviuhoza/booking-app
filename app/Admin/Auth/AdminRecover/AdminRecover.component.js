import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.css';
import { API } from "../../../Api";

class AdminRecoverController {
    constructor($http) {
        this.title = 'Recover Your Account';
        this.$http = $http;
        this.user = {};

    }

    $onInit() {

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
        
        const recoverInput = document.getElementById('recoverEmail');
        recoverInput.value = '';
        
        this.recoverUser = this.users.filter((user) => {
            if (user.email === this.user.email) {
                return user;

            }

        });
        
    }

    reset() {
        if (this.newPassword === this.confirmNewPassword) {
            this.recoverUser[0].password = this.newPassword;
            console.log(this.recoverUser[0].password);
            console.log(this.newPassword);
            const url = `${API.base}${API.user}/${this.recoverUser[0].id}`
            this.$http.put(url, this.recoverUser[0]).then((response) => {
                console.log(' this is the update user : ', response.data);

            });
            this.log = true;
            document.getElementById('reset').value = ' ';
            document.getElementById('reset2').value = ' ';



            const div = document.getElementById('recover');

            const p = document.createElement('p');

            p.appendChild(document.createTextNode('You have successfuly reset your password!'));

            div.appendChild(p);
        }

    }

}

const bindings = {
    
}

export const adminRecoverComponent = {
    controller: AdminRecoverController,
    controllerAs: '$ctrl',
    template,
    bindings
}