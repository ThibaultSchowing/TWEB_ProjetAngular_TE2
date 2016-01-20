'use strict';

describe('Controller: ReppoCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTschApp'));

  var ReppoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReppoCtrl = $controller('ReppoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReppoCtrl.awesomeThings.length).toBe(3);
  });
});
