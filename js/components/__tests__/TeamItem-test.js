/** @jsx React.DOM */

// __tests__/TeamItem-test.js

jest.dontMock('../TeamItem.jsx');

describe('Individual team item', function() {
  it('should load a div', function() {
    var React = require('react/addons');
    var TeamItem = require('../TeamItem.jsx');
    var TestUtils = React.addons.TestUtils;

    var name = 'foo',
        users = [{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e010194","_rev":"1-8e6050e57919678eb5fef4e3e6cf4368","type":"user","name":"c7a9d8c1c0516c0910f7b2013e010194","roles":[],"data":{"username":"dezzie"},"rsrcs":{"gh":{"username":"dezzie","id":1301932}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e01500e","_rev":"1-400637a8114e79e44771191160bdbbc9","type":"user","name":"c7a9d8c1c0516c0910f7b2013e01500e","roles":[],"data":{"username":"errosica"},"rsrcs":{"gh":{"username":"errosica","id":8040511}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e01fe58","_rev":"1-1cd62e674c7085f097c3199a4cf48478","type":"user","name":"c7a9d8c1c0516c0910f7b2013e01fe58","roles":[],"data":{"username":"m3brown"},"rsrcs":{"gh":{"username":"m3brown","id":2699164}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e0208ce","_rev":"1-a963cf30e2a41fe7a0bcc855875d3e07","type":"user","name":"c7a9d8c1c0516c0910f7b2013e0208ce","roles":[],"data":{"username":"marcesher"},"rsrcs":{"gh":{"username":"marcesher","id":127017}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e0222f0","_rev":"1-f95c72fe2ac6bef18a61eee33aa80b3d","type":"user","name":"c7a9d8c1c0516c0910f7b2013e0222f0","roles":[],"data":{"username":"mehtadev17"},"rsrcs":{"gh":{"username":"mehtadev17","id":6795712}},"audit":[]},{"_id":"org.couchdb.user:c7a9d8c1c0516c0910f7b2013e02a6e4","_rev":"1-88f1149bfcd6720c23bfcbc43f3c0217","type":"user","name":"c7a9d8c1c0516c0910f7b2013e02a6e4","roles":[],"data":{"username":"sephcoster"},"rsrcs":{"gh":{"username":"sephcoster","id":1028659}},"audit":[]}];

    var teamItem = TestUtils.renderIntoDocument(
      <TeamItem name={name} users={users} key={name} />
    );

    expect(teamItem.getDOMNode().className).toEqual('team-item');
  });
});