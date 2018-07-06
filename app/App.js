import angular from 'angular';

import appConfig from './App.config'
import Core from './Core/Main.module';
import Admin from './Admin/Main.module';
import Client from './Client/Main.module';
import Public from './Public/Main.module';


class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', [
        'ngRoute',
        'Core',
        'Admin',
        'Client',
        'Public'
    ])
    .config(appConfig)
    .controller('IndexController', IndexController)