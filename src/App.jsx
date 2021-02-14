import './asserts/styles/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignInPage from './Components/SignIn/Atom/SignInPage'
import { ErrorBandl } from './Components/Errors/ErrorBandl'
import { Main } from './Components/Main'
import Header from './Components/Header/Atom/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="*" component={ErrorBandl} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
