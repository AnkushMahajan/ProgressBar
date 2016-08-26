/**
 * Created by Ankush on 3/29/2016.
 */

    //instantiate module for angular app, this acts as a container for DI{ dependency injection} of controllers and service registered with it by the provider
    var progressBarMainModule = angular.module("progressBarApp");

    //Controller constructor to register controller with the module
    progressBarMainModule.controller("progressBarController",['progressBarService', function (progressBarService) {

        //set scope created by the controller to self so that we can access it in other contexts
        var self = this;
        
        //get data from the endPoint
        progressBarService.getProgressInitial().then(function (data) {

            //configure the bars returned by the api
            self.progressBars = data.bars.map(function(item, index){
                return {
                    id: 'progress'+(index+1),
                    name: 'progress'+(index+1),
                    index: index,
                    progress: item
                }
            });

            self.selectedOption =  self.progressBars[0];

            //mapping buttons from the api result
            self.buttons =data.buttons;

            self.update = function(button){
                var oldVal = self.progressBars[self.selectedOption.index].progress;
                var newVal = oldVal+button;
                if(newVal >=0){
                    self.progressBars[self.selectedOption.index].progress = newVal;
                }

            }

        }).catch(function(error){
            console.log(error);
        })
        

    }]);

