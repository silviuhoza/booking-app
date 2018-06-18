import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'

class AdminRegisterController {
    constructor() {
        this.componentName = 'adminRegisterComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
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
