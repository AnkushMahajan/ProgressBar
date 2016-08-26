/**
 * Created by Ankush on 8/26/2016.
 */

describe('Controller Testing', function(){

    var scope;

    beforeEach(function(){
        var progressBarService ={};

        module('progressBarApp', function($provide){
            $provide.value('progressBarService', progressBarService);
        });

        inject(function($q){

            progressBarService.data={
                bars:[25,88,67],
                buttons:[39,18,-21,-11],
                limit:120
            };

            progressBarService.getProgressInitial = function(){

                var deferred = $q.defer();
                
                deferred.resolve(progressBarService.data);

                return deferred.promise;
            };
        });
    });

    //inject mock controller 
    beforeEach(inject(function ($controller,$rootScope, progressBarService) {

        scope= $rootScope.$new();
        progressBarService= progressBarService;

        $controller('progressBarController as progressCtrl',{
           $scope: scope,
           progressBarService: progressBarService
        });

        scope.$digest();
    }));

    //check for addition to the progress bar value
    it('should check for addition to the selected option of progress bar', function(){
        scope.progressCtrl.selectedOption =scope.progressCtrl.progressBars[0];
        scope.progressCtrl.update(scope.progressCtrl.buttons[0]);

        expect(scope.progressCtrl.progressBars[scope.progressCtrl.selectedOption.index].progress).toBe(64);
        scope.progressCtrl.update(scope.progressCtrl.buttons[0]);
        expect(scope.progressCtrl.progressBars[scope.progressCtrl.selectedOption.index].progress).toBe(103);
    });

    it('should check for subtraction to the selected option of progress bar', function(){
        scope.progressCtrl.selectedOption =scope.progressCtrl.progressBars[0];
        scope.progressCtrl.update(scope.progressCtrl.buttons[2]);

        expect(scope.progressCtrl.progressBars[scope.progressCtrl.selectedOption.index].progress).toBe(4);
        scope.progressCtrl.update(scope.progressCtrl.buttons[2]);
        //test that value doesn't come below 0 
        expect(scope.progressCtrl.progressBars[scope.progressCtrl.selectedOption.index].progress).toBe(4);
    });
});