(function(ng){
	'use strict';

	ng.module('main')
		.config([
				function(){
						
				}
			])
		.run([
				'$rootScope',
				function(rScope){
					rScope.ICP = {
						"label": "苏ICP备14034957号-1",
						"href" : "http://www.miibeian.gov.cn/"
					};
				}
			]);

})(angular);