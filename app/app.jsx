 var React = require('react');
 var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

 var AddLoadInfo = require('AddLoadInfo');

var LoadDisplay = React.createClass({
    render: function () {
      return (
        <div>
          <h1>Hello</h1>
        </div>
      );
    }
});

// Load foundation
//$(document).foundation();

// App css
//require('style!css!sass!applicationStyles')

ReactDOM.render(
<AddLoadInfo/>,
  document.getElementById('app')
);
