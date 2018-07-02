import template from './CompanyAdd.template.html';
import stylesComponent from './CompanyAdd.css';

class CompanyAddController {
    constructor($scope, $rootScope) {
        this.company = {};
        this.$scope = $scope;
        this.$rootScope = $rootScope;
    }

    $onInit() {
        
        
         
    }

    addCompany($rootScope,$scope){
console.log(this.company);

        //  this.$rootScope.$broadcast('event:CompanyAdd', {
        //      'name': this.company.name,
        //      'description': this.company.description
        //  });
        // console.log(this.company);

        // Send an event all the way up!

        
         this.$scope.$emit('someEvent', this.company);
        
       
        //     this.$scope.$emit('childEvent', {
        //         message: 'Hello from Ctrl 3'
        //     });
        
        this.company = {};
        
    }
    cancel(){
        this.company ={};
        console.log('salut din cancel');
        
    }
}


const bindings = {

};

export const companyAddComponent = {
    controller: CompanyAddController,
    controllerAs: '$ctrl',
    template,
    bindings
}