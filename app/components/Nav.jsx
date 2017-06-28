import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component{
  render() {
    return (
      <div>
        <h3> Nav bar component</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Add Load </IndexLink>
        <Link to="/loadWorkUp" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Work up a load </Link>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>

      </div>
    );
  }
};

module.exports = Nav;
