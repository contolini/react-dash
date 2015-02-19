/** @jsx React.DOM */

// __tests__/UserList-test.js

jest.dontMock('../UserList.jsx');
describe('List of users', function() {
  it('should contain some users', function() {
    var React = require('react/addons');
    var UserList = require('../UserList.jsx');
    var TestUtils = React.addons.TestUtils;

    var userList = TestUtils.renderIntoDocument(
      <UserList />
    );

    var numUsers = TestUtils.scryRenderedDOMComponentsWithClass( userList, 'user-item' ).length;
    expect( numUsers ).toEqual( 3 );

  });
});