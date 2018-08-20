import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.css';
import { API } from '../../../Api';

class AdminRegisterController {
    constructor($http,$routeParams) {
        this.componentName = 'Register form';
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.user = {

        };
    }

    $onInit() {
        
    }

    register(event) {
        event.preventDefault();

        
        const url = API.base + API.user;
        this.$http.post(url, this.user).then((response) => {
            console.log('this user was added :' , response.data);
            
        });

        document.getElementById('registerName').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
        

    }
    showHide() {
        let div = document.getElementById("hidden_div");
        if (div.style.display == 'none') {
            div.style.display = '';
        } else {
            div.style.display = 'none';
        }
    }
}

const bindings = {
    
}

export const adminRegisterComponent = {
    controller: AdminRegisterController,
    controllerAs: '$ctrl',
    template,
    bindings
}