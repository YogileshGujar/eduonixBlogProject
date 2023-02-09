import React from 'react'
import { Button, Form, Modal,ModalBody,ModalFooter,ModalHeader,FormGroup,Label,Input } from "reactstrap";
export default function LoginModal(props) {
  return (
    <>
    <Modal isOpen={props.isLoginModalOpen} toggle={props.toggleLoginModal}>
            <ModalHeader toggle={props.toggleLoginModal}>Login Modal</ModalHeader>
            <ModalBody>
             <Form>
             <FormGroup>
                <Label for="examplePassword">Email</Label>
                <Input
                  id="emailForRegister"
                  name="emailForLogin"
                  placeholder="Enter Email"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="emailForRegister"
                  name="passwordForLogin"
                  placeholder="Entar Password"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
             </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={props.onLoginSubmit}>
                Login
              </Button>
              <Button color="secondary" onClick={props.toggleLoginModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
    </>
  )
}
