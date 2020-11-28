import React, {Component} from "react";

class LabelTexto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <label>
          {this.props.texto}
        </label>
    )
  }
}

export default LabelTexto;
