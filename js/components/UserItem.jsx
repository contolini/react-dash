var React = require('react');

var UserItem = React.createClass({

  render: function() {
   return (
      <div className="user-item">{ this.props.name }</div>
    )
  }

});

module.exports = UserItem;