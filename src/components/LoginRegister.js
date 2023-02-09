import React, { Component, } from "react";
import { Button, Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap";
import login from "../assets/login.svg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import axios from "axios";
import { authContext } from "../auth";


export class LoginRegister extends Component {

  static contextType=authContext;
  constructor(props) {
    super(props);
    this.state ={
        isLoginModalOpen:false,
        isRegisterModalisOpen:false,
        nameForRegister:'',
        emailForRegister:'',
        passwordForRegister:'',
        genderForRegister:'',
        interestsForRegister:'',
        passwordForLogin:'',
        emailForLogin:'',
    }
  }

  toggleLoginModal=()=>{
    this.setState({
        isLoginModalOpen:!this.state.isLoginModalOpen
    })
  }

  toggleregisterModal=()=>{
    this.setState({
        isRegisterModalisOpen:!this.state.isRegisterModalisOpen
    })
  }

  onValueChange = (event)=>{
    let name= event.target.name;
    let value=event.target.value;
    this.setState({
        [name] : value
    })
    
  }

  onRegisterSubmit = async ()=>{
   let interestsArray=this.state.interestsForRegister.split(',');
   if(!this.state.nameForRegister || !this.state.emailForRegister || !this.state.passwordForRegister){
    alert("Required inputs ara not given ")
    return;
   }

   

   let data={
    name: this.state.nameForRegister,
    email: this.state.emailForRegister,
    password:this.state.passwordForRegister,
    gender:this.state.genderForRegister,
    intersts: interestsArray
   }
   try{
    let response=await axios.post('http://localhost:5000/api/createUser',data);
    alert('User created successfully')
   }catch(err){
    alert('User registration failed')
   }
  
   
    this.toggleregisterModal();
  }

  onLoginSubmit = async () => {
   if(!this.state.emailForLogin || !this.state.passwordForLogin){
    alert("Required inputs ara not given ")
    return;
   }
   let data ={
    email:this.state.emailForLogin,
    password:this.state.passwordForLogin
   }
   try{
      let loginResponse= await axios.post('http://localhost:5000/api/loginUser',data)
      if(loginResponse.data.status=='error'){
        alert(`Login is Failed,reasone: ,${loginResponse.data.message}`);
      }else{
       
        localStorage.setItem('userEmailId',loginResponse.data.message.emailId);
        localStorage.setItem('authtoken',loginResponse.data.message.token);
        localStorage.setItem('userId',loginResponse.data.message.userId);
        localStorage.setItem('interests',loginResponse.data.message.interests)
        this.context.setAuthToken(loginResponse.data.message.token);
        this.context.setUserId(loginResponse.data.message.userId);
        this.context.setuserEmailId(loginResponse.data.message.emailId);
        this.toggleLoginModal();
       
      }
   }catch(err){
    console.log('Error from Api',err)
       alert('Login failed due to server issues')
   }

  
   
  }
  

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={login} alt="LoginImage"></img>
            </div>

            <div className="col-6" style={{ padding: "10%" }}>
              <h4>A Blog Website</h4>
              <br></br>
              <Button
                style={{
                  backgroundColor: "rgb(116, 67, 199)",
                  width: "80%",
                  color: "white",
                }} onClick={this.toggleLoginModal}
              >
               Login
              </Button>
              <br></br>
              <br></br>
              <Button
                style={{
                  backgroundColor: "rgb(116, 67, 199)",
                  width: "80%",
                  color: "white",
                }} onClick={this.toggleregisterModal}
              >
                Register
              </Button>
            </div>
          </div>

        <LoginModal isLoginModalOpen={this.state.isLoginModalOpen} 
        toggleLoginModal={this.toggleLoginModal} onValueChange={this.onValueChange}
        onLoginSubmit={this.onLoginSubmit}></LoginModal>

        <RegisterModal isRegisterModalisOpen={this.state.isRegisterModalisOpen}
        toggleregisterModal={this.toggleregisterModal}
        onValueChange={this.onValueChange} onRegisterSubmit={this.onRegisterSubmit} ></RegisterModal>

         
        </div>
      </>
    );
  }
}

export default LoginRegister;
