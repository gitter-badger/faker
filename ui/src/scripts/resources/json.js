(function(ng){
	'use strict';

	ng.module('json', ['ngResource'])
		.factory('json', ['$resource', 'config',
      function($resource, config){
        return function(filename){
          return $resource(config.uiHome + 'defines/' + filename + '.json');
        };
      }
    ]);
})(angular);