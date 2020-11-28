import React, {Component} from "react";

class EditTexto extends Component {
  constructor(props) {
    super(props);
    this.getTexto = this.props.getTexto.bind(this);
  }

  render() {
    return (
        <input onChange={(e) => this.getTexto(e.target.value)}>
        </input>
    )
  }
}

export default EditTexto;
