'use strict';

describe('Controller: PersonListCtrl', function () {

  // load the controller's module
  beforeEach(module('crudMastaWebApp'));

  var PersonListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonListCtrl = $controller('PersonListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
