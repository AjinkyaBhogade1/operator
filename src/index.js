import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
import AddDocument from './components/AddDocument';
import ListDocument from './components/ListDocument';
import EditDocument from './components/EditDocument';
import AddDoc from './components/AddDoc';



ReactDOM.render(
  
  <Router>
      <div>
        
        <Route exact path='/' component={AddDoc} />
        <Route path='/add-document' component={AddDocument} />
        <Route path='/list-visitor' component={ListDocument} />
        <Route path='/edit-document/:id' component={EditDocument} />
        {/* <Route path='/my-component' component={MyComponent} /> */}


        
        
      </div>
  </Router>,
  document.getElementById('root')
);
