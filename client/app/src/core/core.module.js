(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'lbServices', 'ngSanitize', 'ngResource',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus'
        ]);
})();
