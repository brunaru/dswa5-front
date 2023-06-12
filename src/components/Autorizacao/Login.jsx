import './Autorizacao.css'
import { useState } from 'react'
import authApi from '../../services/auth.api'
import authtoken from '../../services/authtoken'

function Login(props) {
    const [login, setLogin] = useState(true)
    const [erro, setErro] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function emailHandler(event) {
        setEmail(event.target.value)
    }

    function senhaHandler(event) {
        setSenha(event.target.value)
    }

    function checkLogin(event) {
        event.preventDefault()
        const usuario = {
          email: email,
          senha: senha
        }
        authApi.signin(usuario).then(function(result) {
          if (result.status === 200) {
            authtoken.setAuthToken(result.data.token)
            props.setLogin(true)
            setErro('')
          }
        }).catch(erro => {
          setErro(erro.response.data)
        })
        setEmail('')
        setSenha('')
    }

  function cadastrar(event) {
      event.preventDefault()
      const usuario = {
        email: email,
        senha: senha
      }
      authApi.signup(usuario).then(function (result) {
          if (result.status === 200) {
            authtoken.setAuthToken(result.data.token)
            props.setLogin(true)
          }
      }).catch(erro => {
        setErro(erro.response.data)
      })
  }


    function trocarLogin() {
      setLogin(true)
    }

    function trocarCadastro() {
      setLogin(false)
    }

    return (<div className="login">
     <form>
       <div className="input-container">
         <label>E-mail:</label>
         <input type="email" name="email" value={email} required onChange={emailHandler} />
       </div>
       <div className="input-container">
         <label>Senha:</label>
         <input type="password" name="senha" value={senha} required onChange={senhaHandler} />
       </div>
       <div className="button-container">
         {login ? <button type='submit' onClick={checkLogin}>ENTRAR</button> : <button type='submit' onClick={cadastrar}>CADASTRAR</button> }
       </div>
     </form>
     <div className='error'>{erro}</div>
     <div className='button-container'>
     {login ? <button className='button-change' onClick={trocarCadastro}>Cadastrar</button> : <button className='button-change' onClick={trocarLogin}>Voltar ao Login</button> }
      </div>
   </div>)
}

export default Login