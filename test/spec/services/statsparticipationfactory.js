'use strict';

describe('Service: statsparticipationfactory', function () {

  // load the service's module
  beforeEach(module('twebTschApp'));

  // instantiate service
  var statsparticipationfactory;
  beforeEach(inject(function (_statsparticipationfactory_) {
    statsparticipationfactory = _statsparticipationfactory_;
  }));

  it('should do something', function () {
    expect(!!statsparticipationfactory).toBe(true);
  });

});
