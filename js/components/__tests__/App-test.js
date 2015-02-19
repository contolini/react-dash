/** @jsx React.DOM */

// __tests__/App-test.js


var common = require('../../common');

describe('Get all teams method', function() {
  it('should call a callback', function() {
    var promise = common.getAllTeams();
    console.log(promise);
    promise.done(function( result ) {
      expect( result ).toBeDefined();
    });
  });
});