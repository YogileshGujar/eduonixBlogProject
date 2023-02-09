import React,{useEffect, useState} from 'react'
import { Spinner } from "reactstrap";
import axios from "axios";

import {
    Input,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
    
  } from "reactstrap";
import { dishDetails } from '../DishDetails';

export default function ShowBlogs(props) {
    let [loding,setloding]=useState(false)
    let {BlogData,tital1}=props
    // let [Blogs,setBlogs]=useState([])
    // console.log('KK....',BlogData.push);
    // console.log('TTI....',tital1);
    
  //   useEffect(async()=>{
  //     let authToken = localStorage.getItem("authtoken");
  //     let interests = localStorage.getItem("interests");

  //     let interestsArray = interests.split(",");
  //     let data = {
  //       intersts: interestsArray,
  //     };

  //     let header = {
  //       authorization: authToken,
  //     };

  //     try {
  //       let bloginterestsRespo = await axios.post(
  //         "http://localhost:5000/api/getBlogByInterests",
  //         data,
  //         {
  //           headers: header,
  //         }
  //       );
  //       console.log('show..console...',bloginterestsRespo)
  //       setBlogs(bloginterestsRespo.data)
  //       let bData=Blogs?.map((data,)=>{
         
  //         console.log('map..',data.Tag);
  //       })
  //       // console.log('show..usestate...',Blogs[0].Tag)
        

  //   }catch(err){
  //     console.log("error...", err)
  //   }
  // }, [])

    
    let forBlogs = () => {
      if (!BlogData) {
        return (
          <h4>No blogs found..!!</h4>
        )}else{
        return BlogData.filter(
          (tblog)=>{
            if(tblog==""){
              return tblog;
            }else{
              if(tblog.Title.toLowerCase().includes(tital1.toLowerCase())){
                return tblog;
              }
            }
          }
        ).map((blog)=> {
                return(
                    <Card className="my-2">
                    <CardImg
                      alt="Card image cap"
                      src="https://picsum.photos/900/180"
                      style={{
                        height: 180,
                      }}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{blog.Title}</CardTitle>
                      <CardText>
                      {blog.Content}
                      </CardText>
                      <CardText>
                        <small className="text-muted">
                        {blog.Tag}
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                )
                  
                
            })
        
          }
    }

    

  return (
    <>
      <div className="row">
        <h2>Blogs Details</h2>
        {/* {searchdish()} */}
        {/* {forBlogs()} */}
            {loding ? <Spinner> Loading...</Spinner> : forBlogs()}
          
        </div>
    </>
  )
}
