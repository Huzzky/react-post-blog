import './asserts/styles/App.css'
import Header from './Components/Header/Atom/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignInPage from './Components/SignIn/Atom/SignInPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <div className="App__sign-in">
            <SignInPage />
          </div>
        </Route>
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
