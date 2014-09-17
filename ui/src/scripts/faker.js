(function(ng){
  'use strict';

  ng.module('faker', ['json'])

    .config([
      '$locationProvider',
      function($locationProvider){
        $locationProvider.html5Mode(true).hashPrefix('!');
      }
    ])

    .run([
      '$rootScope', 'json',
      function(rScope, json){
        rScope.ICP = json('ICP').get();
      }
    ]);

})(angular);