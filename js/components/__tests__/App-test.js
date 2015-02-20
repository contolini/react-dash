// __tests__/App-test.js

/** @jsx React.DOM */
jest.dontMock('../../common.js');

describe('Get all teams method', function () {
    it('should call a callback', function () {

        var common = require('../../common'),
            $ = require('jquery');

        common.getAllTeams();

        expect($.get).toBeCalled();
    });
});
