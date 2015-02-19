var React = require('react');
var UserItem = require('./UserItem.jsx');

var UserList = React.createClass({

  render: function() {

    var users = [
          'Mikko Myllyla',
          'Heiki Huvonen',
          'Jukka Peltomaki'
        ];

    users = users.map( function( name ) {
      return <UserItem name={name} />;
    });

    return (
      <div className="user-list">
        { users }
      </div>
    )

  }

});

module.exports = UserList;