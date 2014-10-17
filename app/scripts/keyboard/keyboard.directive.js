var module = angular.module('typeMaster.keyboard')

.factory('keyBoardService',[function(){

}])
    .controller('keyboardController',function(){

    })
.directive('tmKeyboard', ['$templateCache', function ($templateCache) {

    return {
        restrict: 'E',
        replace: true,
        scope: {
        },
        template: $templateCache.get("scripts/keyboard/keyboard.directive.html"),
        compile: function () {

        }
    }
}

]);