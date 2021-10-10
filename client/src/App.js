import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/landingPage/landingPage'
import UserDash from './components/userDashboard/userDash'
import HeroDash from './components/heroDashboard/heroDash'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/userDash" exact component={UserDash} />
        <Route path="/heroDash" exact component={HeroDash} />
      </Router>
    </div>
  )
}

export default App
