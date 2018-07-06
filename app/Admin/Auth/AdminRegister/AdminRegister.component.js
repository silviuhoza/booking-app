import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.css'

class AdminRegisterController {
    constructor() {
        this.componentName = 'Register form';
        this.user = {

        };
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
    }

    register(event) {
        event.preventDefault();

        console.log(this.user);

        document.getElementById('registerName').value = '';
        document.getElementById('registerEmail').value = '';
        document.getElementById('registerPassword').value = '';
        

    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminRegisterComponent = {
    controller: AdminRegisterController,
    controllerAs: '$ctrl',
    template,
    bindings
}