(function(ng){
	'use strict';

	ng.module('main', ['json'])
		.config([
				function(){
				}
			])
		.run([
				'$rootScope', 'json',
				function(rScope, json){
					rScope.ICP = json('ICP').get();
				}
			]);

})(angular);