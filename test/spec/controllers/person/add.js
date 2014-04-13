'use strict';

describe('Controller: PersonAddCtrl', function () {

  // load the controller's module
  beforeEach(module('crudMastaWebApp'));

  var PersonAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonAddCtrl = $controller('PersonAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
