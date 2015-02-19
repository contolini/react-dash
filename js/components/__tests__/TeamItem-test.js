/** @jsx React.DOM */

// __tests__/TeamItem-test.js

jest.dontMock('../TeamItem.jsx');
describe('Individual team item', function() {
  it('should load a div', function() {
    var React = require('react/addons');
    var TeamItem = require('../TeamItem.jsx');
    var TestUtils = React.addons.TestUtils;

    var teamItem = TestUtils.renderIntoDocument(
   		<TeamItem />
    );

    expect(teamItem.getDOMNode().className).toEqual('team-item');
  });
});