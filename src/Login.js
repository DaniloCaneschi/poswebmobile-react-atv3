import React, {useState} from "react";

const Login = props => {
  const [loginState, setLoginState] = useState({
    nome: "Login",
    imagem: "acesso-negado.jpg"
  });

  const changeLogin = () => {
    setLoginState({
      nome: (loginState.nome === "Login") ? "Logout" : "Login",
      imagem: (loginState.nome === "Login") ? "acesso-permitido.jpg" : "acesso-negado.jpg"
    })
  }

  return (
      <div>
        <header>
          <button onClick={changeLogin}>
            {loginState.nome}
          </button>
          <br/><br/>
          <img src={loginState.imagem}/>
        </header>
      </div>
  )
}

export default Login;
