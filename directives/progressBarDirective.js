/**
 * Created by Ankush on 8/26/2016.
 */

    //access the main module to register the directive with
    var progressBarMainModule = angular.module("progressBarApp");

    //directive constructor function to register the directive with Module
    progressBarMainModule.directive("progressBar", function(){
        return {
            restrict: "E",
            replace: true,
            templateUrl: "../templates/progressBarTemplate.html",
            scope:{
                progress:"=progress",
                limit:'=limit'
            },
            link: function(scope, elem, attrs){
                scope.id = attrs.id;

                //progressBarElem to modify style based on input
                var progressBarElem = angular.element(elem);

                //watch the progress input so that the css can be modified for different values
                scope.$watch('progress', function(newVal,oldVal){
                    if(newVal > scope.limit){
                        progressBarElem.find('.progress-bar').addClass('progress-bar-danger');
                    }else if(progressBarElem.find('.progress-bar').hasClass('progress-bar-danger')){
                        progressBarElem.find('.progress-bar').removeClass('progress-bar-danger');
                    }
                });
            }
        }
    });

