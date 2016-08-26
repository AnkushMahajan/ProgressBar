/**
 * Created by ankushm on 26/08/2016.
 */

//get the main module to register the service with
var progressBarMainModule = angular.module("progressBarApp");

//create a service using factory method provided by the provider API
progressBarMainModule.factory('progressBarService',['$http', '$q',  function($http, $q){

    return {

        getProgressInitial : function(){
            return $q(function (resolve, reject) {

                $http.get('http://pb-api.herokuapp.com/bars').success(function(data){
                    
                    resolve(data);
                    
                }).error(function(err){

                    reject(err);
                })

            });
        }
    }
}]);