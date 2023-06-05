import './Login.css'
import { useState } from 'react'
import authApi from '../../services/auth.api'
import authtoken from '../../services/authtoken'

function LoginPage(props) {
    const [erro, setErro] = useState('')
    let email, senha

    function emailHandler(event) {
        email = event.target.value
    }

    function senhaHandler(event) {
        senha = event.target.value
    }

    function checkLogin(event) {
        event.preventDefault()
        const usuario = {
            email: email,
            senha: senha
        }
        authApi.signin(usuario).then(function(result) {
          authtoken.setAuthToken(result.token)
          props.setLogin(true)
        })
    }

    function mensagemErro() {
        return <div className='error'></div>
    }

    return (<div className="login">
     <form onSubmit={checkLogin}>
       <div className="input-container">
         <label>E-mail:</label>
         <input type="text" name="email" value={email} required onChange={emailHandler} />
       </div>
       <div className="input-container">
         <label>Senha:</label>
         <input type="password" name="senha" value={senha} required onChange={senhaHandler} />
       </div>
       <div className="button-container">
         <button type='submit'>Entrar</button>
       </div>
     </form>
   </div>)
}

export default LoginPage