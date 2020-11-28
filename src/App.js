import {Component} from "react";
import EditTexto from "./EditTexto";
import LabelTexto from "./labelTexto";
import Login from "./Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    }

    this.getTexto = this.getTexto.bind(this);
  }

  getTexto(e) {
    this.setState({texto: e});
  }

  render() {
    return (
        <div>
          <EditTexto getTexto={this.getTexto}/>
          <br/><br/>
          <LabelTexto texto={"Você digitou " + this.state.texto.length + " caracteres."}/>
          <br/><br/><br/><br/>
          <Login/>
        </div>
    );
  }
}

export default App;
