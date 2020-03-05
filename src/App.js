import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Index from './pages/Index'
import About from './pages/About'

const elements = [
  { key: 'home', path: '/', label: 'Home', exact: true, component: Index },
  { key: 'about', path: '/about', label: 'About', exact: false, component: About }
]

const Documents = ({ of }) => of.map(props => (<Route {...props} />))

const App = () => (
  <Router>
    <div className="App">
      <NavBar brandName="react demo" elements={elements}></NavBar>
      <Switch>
        <Documents of={elements} />
      </Switch>
    </div>
  </Router>
)

export default App;
