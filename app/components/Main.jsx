import React from 'react';
import LoadDataApp from 'LoadDataApp'
import LoadList from 'LoadList';
import AddLoadInfo from 'AddLoadInfo';
import Nav from 'Nav';

var Main = React.createClass({
  render: function() {
    return (
      <div>
      <Nav/>
      <h3> Main component </h3>
      {this.props.children}
    </div>
    );
  }
});

module.exports = Main;
