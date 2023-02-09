import React from "react";
import {
  Button,Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Label,Input} from "reactstrap";
export default function RegisterModal(props) {
  return (
    <div>
      <>
        <Modal
          isOpen={props.isRegisterModalisOpen}
          toggle={props.toggleregisterModal}
        >
          <ModalHeader toggle={props.toggleregisterModal}>
            Register Modal
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input
                  id="exampleEmail"
                  name="nameForRegister"
                  placeholder="Enter Name"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Email</Label>
                <Input
                  id="emailForRegister"
                  name="emailForRegister"
                  placeholder="Enter Email"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="emailForRegister"
                  name="passwordForRegister"
                  placeholder="Entar Password"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Gender</Label>
                <Input
                  id="emailForRegister"
                  name="genderForRegister"
                  placeholder="Entar Gender"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Interests</Label>
                <Input
                  id="emailForRegister"
                  name="interestsForRegister"
                  placeholder="Entar Interests with ,"
                  type="text"
                  onChange={props.onValueChange}
                />
              </FormGroup>
              
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.onRegisterSubmit}>
             Register
            </Button>
            <Button color="secondary" onClick={props.toggleregisterModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </div>
  );
}
