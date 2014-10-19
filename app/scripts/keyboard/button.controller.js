angular.module('typeMaster.keyboard', []);
var module = angular.module('typeMaster.keyboard')

    .service('buttonDelegateService', window.delegateService([
        "showConsole"
    ])
)
    .controller('buttonController', ['$scope', '$element', '$attrs','buttonDelegateService',
        function ($scope, $element, $attrs,buttonDelegateService) {
         var delegate=$attrs['componentId'];
         var register = buttonDelegateService.registerComponent(this,delegate);
        console.log("test delegate",buttonDelegateService.getInstances());
        this.showConsole = function () {
            console.log("from console");
            return true;
        }
            console.log("test delegate",buttonDelegateService.getInstance(this).showConsole());
            console.log("object",buttonDelegateService.getInstance(this));
    }])