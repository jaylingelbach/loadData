 var React = require('react');
 var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var LoadDataApp = require('LoadDataApp');
var AddLoadInfo = require('AddLoadInfo');

// Load foundation
//$(document).foundation();

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ LoadDataApp }>

    </Route>

  </Router>,
  document.getElementById('app')
);
