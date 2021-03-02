import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      isEmpty: true,
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  handleSafe = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isEmpty: true,
      });
    }
  };

  render() {
    const { status } = this.state;
    return (
      <>
        <div className="contact-wrapper">
          <div>
            <div className="contact__text-wrapper">
              <p className="contact__header">
                If you like to buy a product - contact me.
              </p>
            </div>

            <p className="contact__text">
              If you have your own idea for a furniture or a resin product - let
              me see what I can do.
            </p>
            <p className="contact__text">Feel free to comment.</p>
            <br></br>
          </div>

          <Form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/myybvoqz"
            method="POST"
            className="form"
          >
            <FormGroup>
              <div className="form__safe">
                <Input type="text" name="age" onChange={this.handleSafe} />
              </div>
              <Label>Your E-mail:</Label>
              <Input type="email" name="email" />
            </FormGroup>
            <FormGroup>
              <Label>Your message:</Label>
              <Input type="textarea" name="message" />
            </FormGroup>
            {status === "SUCCESS" ? (
              <p>Thank you for your message.</p>
            ) : (
              <Button>Submit</Button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </Form>
        </div>
      </>
    );
  }
}

export default ContactPage;
