import React from 'react';
import LoadDataApp from 'LoadDataApp';
import LoadList from 'LoadList';
import AddLoadInfo from 'AddLoadInfo';
import Nav from 'Nav';
import LoadWorkUp from 'LoadWorkUp';

class Main extends React.Component {
  render () {
    return (
      <div>
      <Nav/>
      <h3> Main component </h3>
      {this.props.children}
    </div>
    );
  }
};

module.exports = Main;
