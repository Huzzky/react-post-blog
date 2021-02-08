import './App.css'
import Header from './Components/Header/Atom/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Header />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
