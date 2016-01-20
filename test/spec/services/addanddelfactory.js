'use strict';

describe('Service: addanddelfactory', function () {

  // load the service's module
  beforeEach(module('twebTschApp'));

  // instantiate service
  var addanddelfactory;
  beforeEach(inject(function (_addanddelfactory_) {
    addanddelfactory = _addanddelfactory_;
  }));

  it('should do something', function () {
    expect(!!addanddelfactory).toBe(true);
  });

});
