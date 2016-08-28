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
                progress:"=progress"
            },
            link: function(scope, elem, attrs){
                scope.id = attrs.id;

                //progressBarElem to modify style based on input
                var progressBarElem = angular.element(elem);

                //watch the progress input so that the css can be modified for different values
                scope.$watch('progress', function(newVal,oldVal){
                    if(newVal > 100){

                        //Vanilla javascript get descendants by class name instead of jquery find
                        progressBarElem[0].querySelectorAll(".progress-bar")[0].className += ' progress-bar-danger';
                    }else if(progressBarElem[0].querySelectorAll(".progress-bar")[0].className.indexOf('progress-bar-danger') >-1){

                        //split the class name string by space to get array of all classes on the element
                        var classNameArr =progressBarElem[0].querySelectorAll(".progress-bar")[0].className.split(' ');

                        //filter out the progress bar dange class from the array
                        var classesArr = classNameArr.filter(function(item){

                            return item !== 'progress-bar-danger';
                        });

                        // join back the array into string and you'll have the class names - progress bar danger
                        progressBarElem[0].querySelectorAll(".progress-bar")[0].className = classesArr.join(' ');
                    }
                });
            }
        }
    });

