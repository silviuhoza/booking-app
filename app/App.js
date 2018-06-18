import angular from 'angular';

import Core from './Core/Main.module';
import Admin from './Admin/Main.module';
import Public from './Public/Main.module';


class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', ['Core', 'Admin', 'Public'])
    .controller('IndexController', IndexController)
