import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.scss'

class AdminRecoverController {
    constructor() {
        this.componentName = 'adminRecoverComponent';
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
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
