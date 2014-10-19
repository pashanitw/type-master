/**
 * Created by shaikp on 17/10/14.
 */
/**
 * Created by shaikp on 17/10/14.
 */
(function () {
    window.delegateService = function (methods) {
        return ['$log', function ($log) {
            var handleInstance,
                instances = [];


            this.registerComponent = function (handle, delegate) {
                handle.$$delegate = delegate;
                instances.push(handle);
                return function () {
                    var instance;
                    for (var i = 0, len = instances.length; i < len; i++) {
                        instance = instances[i];
                        if (instance.$$delegate = delegate) {
                            instances.splice(index, 1);
                            break;
                        }
                    }
                }
            };

            function InstanceHandle(handle) {
                this.handle = handle;
            }

            angular.forEach(methods, function (method) {
                InstanceHandle.prototype[method] = function () {
                 return   this[method].apply(this.handle)
                }
            });

            this.getInstance = function (handle) {
                return new InstanceHandle(handle);
            }
            this.getInstances=function(){
                return instances;
            }
        }]
    }
})();
