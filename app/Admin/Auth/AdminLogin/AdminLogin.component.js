import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.css';
import { API } from '../../../Api';

class AdminLoginController {
    constructor($http, $routeParams) {
        this.componentName = 'Login Form';
        this.$http = $http;
        this.$routeParams = $routeParams;
        this.admin = {
            
         };
      
    }

    $onInit() {
        // console.log('hi there, I am', this.componentName);
        this.getUsers();
        
    }
   getUsers(){
       const url = API.base + API.user;
       this.$http.get(url).then((response) => {
        console.log(response.data);
        this.users = response.data;
       });
   }
    onSubmit(event) {
        event.preventDefault();
        
        console.log(this.admin);
        this.user = this.users.filter((user)=>{
            if (user.email === this.admin.email && user.password === this.admin.password) {
                this.response = true;
                
                
             } else if (user.email !== this.admin.email && user.password === this.admin.password) {
                       alert('Your email is wrong!')
                   
            } else if (user.email === this.admin.email && user.password !== this.admin.password) {
                alert('Your password is wrong!')
            }

            });
            
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        
        
          
            
    }
    getUserId() {
        this.userId = this.users.filter((user)=>{
           
            if (user.email === this.admin.email && user.password === this.admin.password) {
                console.log(user.id);
                return user.id;
                
            }
            
        });
       
        // console.log(this.userId[0].id);
        
        this.id = this.userId[0].id;

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