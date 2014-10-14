'use strict';

describe('KEYBOARD.DIRECTIVE', function(){
    var scope;

    beforeEach(module('typeMaster'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('SHOULD WORK ALL THE KEYS PROPERLY', inject(function($controller) {
    }));

    it('SHIFT+KEY SHOULD PRODUCE UPPERCASE LETTER WHEN CAPSLOCK IS ENABLED', inject(function($controller) {
    }));

    it('ALT+KEY SHOULD PRODUCE UPPERCASE LETTER WHEN CAPSLOCK IS ENABLED', inject(function($controller) {
    }));
});
