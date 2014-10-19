var module = angular.module('typeMaster.keyboard')

    .directive('tmButton', ['$templateCache', function ($templateCache) {

        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: 'buttonController',
            template: $templateCache.get("scripts/keyboard/button.directive.html"),
            compile: function ($element, $attr) {
                console.log("Elelement Is", $element,$attr);
                return function ($scope, $element, $attrs, ctrl) {

                }
            }
        }
    }

    ]);