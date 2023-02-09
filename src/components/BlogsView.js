import axios from "axios";
import React, { Component } from "react";
import {
  Input,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Toast,
  ToastHeader
} from "reactstrap";
import CreateBlog from "./CreateBlog";
import ShowBlogs from "./ShowBlogs";

export default class BlogsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinterests: "",
      allBlogs: "",
      tital1: "",
     
    };
  }
  onValueChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount = async () => {
    let authToken = localStorage.getItem("authtoken");
    let interests = localStorage.getItem("interests");
    let interestsArray = interests.split(",");
    this.setState({
      userinterests: interestsArray,
    });
    let data = {
      intersts: interestsArray,
    };
    console.log("Intr..", interestsArray);
    let header = {
      authorization: authToken,
    };
    try {
      let bloginterestsRespo = await axios.post(
        "http://localhost:5000/api/getBlogByInterests",
        data,
        {
          headers: header,
        }
      );
      this.setState({ allBlogs: bloginterestsRespo.data });

      console.log("blogs...", bloginterestsRespo.data);
    } catch (err) {
      console.log("error...", err);
    }
    console.log("yessss...", this.state.allBlogs);
    // console.log("yes...",AllBlogs)
  };

  ShowInterests() {
    if (!this.state.userinterests) {
      return <h3>No Interest Found..</h3>;
    } else {
      return this.state.userinterests.map((data) => {
        return (
          <div className="interest">
             <Toast >
            <ToastHeader icon="info">{data}</ToastHeader>
            </Toast>
          </div>
          
        );
      });
    }
  }

  render() {
    return (
      <>
        <Input
          className="search"
          style={{
            width: "40%",
            marginLeft: "59%",
            marginTop: "1%",
            marginBottom: "1%",
          }}
          placeholder="Search Posts"
          name="tital1"
          onChange={this.onValueChange}
        />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <br></br>
              <br></br>
              <br></br>
           <h2> Interest</h2>
              {this.ShowInterests()}
            </div>

            <div className="col-6">
              <>
              {/* <ShowBlogs BlogData={AllBlogs} tital1={this.state.tital1}/> */}
              <ShowBlogs
                BlogData={this.state.allBlogs}
                tital1={this.state.tital1}
              />
              </>
            </div>

            <div className="col-3">
              <>
              <CreateBlog></CreateBlog>
              </>
            </div>
          </div>
        </div>
      </>
    );
  }
}
