import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'

class AdminLoginController {
    constructor() {
        this.componentName = 'adminLoginComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
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
