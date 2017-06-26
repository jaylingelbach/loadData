import React from 'react';
import ReactDOM from'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import About from 'About';
import LoadDataApp from 'LoadDataApp';
import AddLoadInfo from 'AddLoadInfo';

// Load foundation
//$(document).foundation();
// LoadDataApp comparable to video main
ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ Main }>
      <Route path="about" component={ About }/>
      <IndexRoute component={ LoadDataApp }/>
    </Route>

  </Router>,
  document.getElementById('app')
);
