'use strict';

describe('Controller: ControlsCtrl', function () {

  // load the controller's module
  beforeEach(module('crudMastaWebApp'));

  var ControlsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlsCtrl = $controller('ControlsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(2);
  });
});
