import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <h3> Nav bar component</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Add Load </IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
      </div>
    );
  }
});

module.exports = Nav;