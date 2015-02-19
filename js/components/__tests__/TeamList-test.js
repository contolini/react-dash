/** @jsx React.DOM */

jest.dontMock('../TeamList.jsx');
describe('List of teams', function() {
  it('should contain some teams', function() {
    var React = require('react/addons');
    var TeamList = require('../TeamList.jsx');
    var TestUtils = React.addons.TestUtils;

    var teamList = TestUtils.renderIntoDocument(
      <TeamList />
    );

    var numTeams = TestUtils.scryRenderedDOMComponentsWithClass( teamList, 'team-item' ).length;
    expect( numTeams ).toEqual( 3 );

  });
});