/**
 * Created by Ankush on 3/29/2016.
 */

    //instantiate module for angular app, this acts as a container for DI{ dependency injection} of controllers and service registered with it by the provider
    var progressBarMainModule = angular.module("progressBarApp");

    //Controller constructor to register controller with the module
    progressBarMainModule.controller("progressBarController", function () {

        //set scope created by the controller to self so that we can access it in other contexts
        var self = this;
        
        self.progressPercent = {
            "progress1":0,
            "progress2": 0,
            "progress3": 0
        };

        self.progressBars = [
            {
                id: "progress1",
                name: "progress1"
            },
            {
                id: "progress2",
                name: "progress2"
            },
            {
                id: "progress3",
                name: "progress3"
            }
        ];

        self.selectedOption =  {id: "progress1", name: "progress1"};

        self.buttons =[-25, -10, +10, +25];

        self.update = function(button){
            var oldVal = self.progressPercent[self.selectedOption.name];
            var newVal = oldVal+button;
            if(newVal >=0){
                self.progressPercent[self.selectedOption.name] = newVal;
            }

        }
    });

