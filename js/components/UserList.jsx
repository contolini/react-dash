var React = require('react');
var UserItem = require('./UserItem.jsx');

var UserList = React.createClass({

  render: function() {

    var users = this.props.users;

    users = users.map( function( user ) {
      return <UserItem name={user.data.username} key={user.name} />;
    });

    return (
      <ul className="user-list">
        {users}
      </ul>
    )

  }

});

module.exports = UserList;