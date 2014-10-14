module.exports = {
    typeMasterFiles: [
        '!./app/scripts/**/*.spec.js',
        './app/scripts/**/*.js',
        './app/template-cache/**/*.js'
    ],
    BOWER_BASE_PATH: 'app/bower_components/',
    thirdPartyJs: [
        'jquery/dist/jquery.js',
        'angular/angular.js'
    ],
    getThirdParthJsFiles: function () {
        var path = this.BOWER_BASE_PATH,
            files = this.thirdPartyJs,
            jsPaths=[];
        for (i = 0, len = files.length; i < len; i += 1) {
            jsPaths.push(path + files[i]);
        }
        return jsPaths;
    }
};