import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.scss'

class AdminRecoverController {
    constructor() {
        this.title = 'Recover Your Account';
        this.user ={

        };
       
    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);
    }
    recover(event){
        event.preventDefault();

        console.log(this.user);
        //erasing the data from input
        document.getElementById('recoverEmail').value = '';
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
