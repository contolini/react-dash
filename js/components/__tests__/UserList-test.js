/** @jsx React.DOM */

jest.dontMock('../UserList.jsx')
    .dontMock('jquery');

describe('List of users', function() {
  it('should contain some users', function() {
    var React = require('react/addons');
    var UserList = require('../UserList.jsx');
    var TestUtils = React.addons.TestUtils;

    var users = [{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e004675","_rev":"1-bb6ea5e1c90f398ec75c1539bbcb9b9c","type":"user","name":"c7a9d8c1c0516c0910f7b2013e004675","roles":[],"data":{"username":"ascott1"},"rsrcs":{"gh":{"username":"ascott1","id":212533}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e0124b6","_rev":"1-8d8c4244f8d06547efa5063b81fc4bae","type":"user","name":"c7a9d8c1c0516c0910f7b2013e0124b6","roles":[],"data":{"username":"dpford"},"rsrcs":{"gh":{"username":"dpford","id":2790776}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e02909a","_rev":"1-f33c2d6cf347cf98e0ab8d27e09bfd4b","type":"user","name":"c7a9d8c1c0516c0910f7b2013e02909a","roles":[],"data":{"username":"rosskarchner"},"rsrcs":{"gh":{"username":"rosskarchner","id":235397}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e0299b5","_rev":"1-c7c3694c1aab0a8ed33a921adab456b7","type":"user","name":"c7a9d8c1c0516c0910f7b2013e0299b5","roles":[],"data":{"username":"Scotchester"},"rsrcs":{"gh":{"username":"Scotchester","id":1044670}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e02c275","_rev":"2-6c4d4e5414accbdc9c9700654d64802d","type":"user","name":"c7a9d8c1c0516c0910f7b2013e02c275","roles":["gh:user"],"data":{"username":"virtix"},"rsrcs":{"gh":{"username":"virtix","id":12570}},"audit":[]}];

    var userList = TestUtils.renderIntoDocument(
      <UserList users={users} />
    );

    var numUsers = TestUtils.scryRenderedDOMComponentsWithClass( userList, 'user-item' ).length;
    expect( numUsers ).toEqual( 5 );

  });
});