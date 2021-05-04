import React from "react";
import { ListGroup } from "react-bootstrap";
import ReservationForm from "./ReservationForm";

class ShowForm extends React.Component {
  state = {
    selected: false,
  };

  showForm = () => {
    return console.log("this is the form ");
  };

  render() {
    return (
      // props.dish is the whole object
      <div>
        <h2 onClick={() => this.setState({ selected: !this.state.selected })}>
          Book your table NOW!
        </h2>
        {this.state.selected === true && <ReservationForm />}
        
      </div>
    );
  }
}

export default ShowForm;
