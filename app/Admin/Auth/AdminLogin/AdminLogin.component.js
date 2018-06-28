import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.css'

class AdminLoginController {
    constructor() {
        this.componentName = 'Login Form';
        this.admin = {
            
         };
      
    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);

    }

    onSubmit(event) {
        event.preventDefault();
        
        console.log(this.admin);

        document.getElementById('email').value = '';
        document.getElementById('password').value = '';

    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminLoginComponent = {
    controller: AdminLoginController,
    controllerAs: '$ctrl',
    template,
    bindings
}