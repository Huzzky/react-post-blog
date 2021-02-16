import './asserts/styles/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInPage from './Components/SignIn/Atom/SignInPage'
import SignUpPage from './Components/signUp/SignUpPage'
import { ErrorBandl } from './Components/Errors/ErrorBandl'
import { Main } from './Components/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="*" component={ErrorBandl} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
