'use strict';

describe('Service: statsFactory', function () {

  // load the service's module
  beforeEach(module('twebTschApp'));

  // instantiate service
  var statsFactory;
  beforeEach(inject(function (_statsFactory_) {
    statsFactory = _statsFactory_;
  }));

  it('should do something', function () {
    expect(!!statsFactory).toBe(true);
  });

});
