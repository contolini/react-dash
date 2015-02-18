/** @jsx React.DOM */

// __tests__/TeamItem.js

jest.dontMock('../TeamItem.react.js');
describe('Individual team item', function() {
  it('should load a div', function() {
    var React = require('react/addons');
    var TeamItem = require('../TeamItem.react.js');
    var TestUtils = React.addons.TestUtils;

    var teamItem = TestUtils.renderIntoDocument(
      <TeamItem />
    );

    expect(teamItem.getDOMNode().className).toEqual('team-item');
  });
});