/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

// var Footer = require('./Footer.jsx');
// var Header = require('./Header.jsx');
var UserList = require('./UserList.jsx');
var React = require('react');
// var TodoStore = require('../stores/TodoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
// function getTodoState() {
//   return {
//     allTodos: TodoStore.getAll(),
//     areAllComplete: TodoStore.areAllComplete()
//   };
// }

var App = React.createClass({

  // getInitialState: function() {
  //   return getTodoState();
  // },

  // componentDidMount: function() {
  //   TodoStore.addChangeListener(this._onChange);
  // },

  // componentWillUnmount: function() {
  //   TodoStore.removeChangeListener(this._onChange);
  // },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <UserList />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  // _onChange: function() {
  //   this.setState(getTodoState());
  // }

});

module.exports = App;