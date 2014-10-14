var module = angular.module('typeMaster.keyboard');
module.directive('tmKeyboard', ['$templateCache', function ($templateCache) {

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