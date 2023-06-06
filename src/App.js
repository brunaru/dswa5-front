import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navegacao from './components/Navegacao/Navegacao'
import LoginPage from './components/Autorizacao/LoginPage'
import Rotas from './services/routes'
import authtoken from './services/authtoken'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  function setLogin(valor) {
    setLoggedIn(valor)
  }

  function CheckLogin() {
    //authtoken.removeAuthToken()
    setLoggedIn(authtoken.getAuthToken())
    if (isLoggedIn) {
      return (<Router>
        <div className="App">
          <Navegacao />
          <Rotas />
        </div>
      </Router>)
    }
    return (
    <div className="App">
      <LoginPage setLogin={setLogin} />
    </div>)
  }

  return (<CheckLogin />)
}

export default App
