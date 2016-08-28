/**
 * Created by Ankush on 8/26/2016.
 */

    //instantiate module for angular app, this acts as a container for DI{ dependency injection} of controllers and service registered with it by the provider
    var progressBarMainModule = angular.module("progressBarApp");

    //Controller constructor to register controller with the module
    progressBarMainModule.controller("progressBarController",['progressBarService', function (progressBarService) {

        'use strict';
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
                    progress: Math.ceil(data.limit/item)
                }
            });

            //Consume limit provided by the API to limit progress for the bars, this is the equivalent of 100%
            self.limit = data.limit;

            self.progressIncrementer = 100/self.limit;

            //default option selected on init
            self.selectedOption =  self.progressBars[0];

            //mapping buttons from the api result
            self.buttons =data.buttons;

            //this function is responsible for updating the selected progress bar value
            self.update = function(button){

                /**
                *   before updating the progress val get the old val and add to it the new progress %
                *   formula should be if limit*x = 100; x = 100/limit ; new value = old value + (100/limit)* button
                */
                

                var oldVal = self.progressBars[self.selectedOption.index].progress;
                var newVal = oldVal + Math.ceil(self.progressIncrementer * button);
                if(newVal >=0){
                    self.progressBars[self.selectedOption.index].progress = newVal;
                }

            }

        }).catch(function(error){
            console.log(error);
        })
        

    }]);

