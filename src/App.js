import React from 'react';
import Display from './display.js'
import Add from './add.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Modify from './modify'
import './cssFiles/app.css'


function App() {
  return (
  <div className='home'>
    <p className='title'>Contact App</p>
    <div>
      <button><Link className='btn' to='/contacts'>Contact List</Link></button>
      <button><Link className='btn' to='/add_contact'>Add Contact</Link></button>
    </div>
    <Route path='/contacts' component={Display} />
    <Route path='/add_contact' component={Add} />
    <Route path='/modify/:id' component={Modify} />
  </div>
  );
}

export default App;
