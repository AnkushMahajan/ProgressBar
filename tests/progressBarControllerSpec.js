/**
 * Created by Ankush on 3/29/2016.
 */

describe("Controller Testing", function(){

    beforeEach(module("progressBarApp"));

    var progressBarController;
    var scope = {};

    beforeEach(inject(function ($controller ) {
        progressBarController = $controller('progressBarController',{
           $scope: scope
        });
    }));
        it("should check for addition to the selected option of progress bar", function(){
        scope.selectedOption.name ="progress2";
        scope.update(25);

        expect(scope.progressPercent[scope.selectedOption.name]).toBe(25);
        scope.update(25);
        expect(scope.progressPercent[scope.selectedOption.name]).toBe(50);
    });

    it("should check for subtraction to the selected option of progress bar", function(){
        scope.selectedOption.name ="progress2";
        scope.update(-25);

        expect(scope.progressPercent[scope.selectedOption.name]).toBe(0);
        scope.update(25);
        expect(scope.progressPercent[scope.selectedOption.name]).toBe(25);
        scope.update(-25);
        expect(scope.progressPercent[scope.selectedOption.name]).toBe(0);
    });
})