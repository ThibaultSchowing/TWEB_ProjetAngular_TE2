'use strict';

describe('Controller: RepoCtrl', function () {

  // load the controller's module
  beforeEach(module('twebTschApp'));

  var RepoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepoCtrl = $controller('RepoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepoCtrl.awesomeThings.length).toBe(3);
  });
});
