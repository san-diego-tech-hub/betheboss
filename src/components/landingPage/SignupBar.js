import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components'
import SubscriptionForm from './SubscriptionForm';

class SignUpBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {

    const Bar = styled.div`
      background: #3C73B3;
      color: white;
      font-family: sans-serif;
      padding: 1rem 0;
      text-align: center;
    `

    const SignUpButton = styled(Button)`
      background: #FDC02F;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
      margin-left: 0.8rem;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
      &:hover, &:focus {
        background: #EDB01F;
      }
    `
    return (
      <div>
        <Bar>
          <div className="py-3">
            Receive free business resources and learn more about our incredible intern program by signing up.

          <SignUpButton className="btn font-weight-bolder" onClick={this.toggle}>Support Our Work </SignUpButton>
          </div>
        </Bar>


        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign Up!</ModalHeader>
          <ModalBody className="bg-secondary">

            <SubscriptionForm />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}

export default SignUpBar;
