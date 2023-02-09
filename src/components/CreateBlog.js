import  {useState} from 'react'
import { Button, Form, Modal,ModalBody,ModalFooter,ModalHeader,FormGroup,Label,Input } from "reactstrap";
import { authContext } from '../auth';
import { useContext } from 'react';
import axios from 'axios';


export default function CreateBlog() {
    
    let userInfo=useContext(authContext);

    let [Blog, setBlog]=useState({
        Title:"",
        Content:"",
        Tag:"",
    });

    let [isCreateBlogOpen, setisCreateBlogOpen]=useState(false);

    function toggleCreatBlogModal(){
        setisCreateBlogOpen(!isCreateBlogOpen);
    }

    let handleChange=(e)=>{
        // let name=e.target.name;
        // let value=e.target.value;
        // setBlog({...isCreateBlogOpen,[e.target.name]:e.target.value})
        let {name,value}=e.target;
        setBlog({...Blog,[name]:value});
    }
   

    let SubmitBlog= async ()=>{
     let userId = userInfo.userId
     let authToken=userInfo.authToken
     console.log("userId...",userId,authToken);
     let data={
        Title:Blog.Title,
        Content:Blog.Content,
        Tag:Blog.Tag,
        CreatedBy:userId
     }
     let header = {
        authorization: authToken,
      };

      try{
        let BlogData= await axios.post("http://localhost:5000/api/createBlog"
        ,data,{ headers: header,})
        console.log("submitBlogDta..",BlogData);

      }catch(err){
        console.log("Error :Blog data Is not send..")
      }
      toggleCreatBlogModal();

    }
    console.log("blogInput...",Blog.Title);
    console.log("blogInput...",Blog.Title);
    console.log("blogInput...",Blog.Tag);

  return (
    <>
      <Button color="primary" onClick={toggleCreatBlogModal}>
        CreateBlog
      </Button>

    <Modal isOpen={isCreateBlogOpen} toggle={toggleCreatBlogModal}>
            <ModalHeader toggle={toggleCreatBlogModal}>Create Blog</ModalHeader>
            <ModalBody>
             <Form>
             <FormGroup>
                <Label for="examplePassword">Title</Label>
                <Input
                  id="Title"
                  name="Title"
                  placeholder="Enter Title"
                  type="text"
                  onChange={handleChange}
                  value={Blog.Title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Content</Label>
                <Input
                  id="Content"
                  name="Content"
                  placeholder="Entar Content"
                  type="text"
                  onChange={handleChange}
                  value={Blog.Content}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Tag</Label>
                <Input
                  id="Tag"
                  name="Tag"
                  placeholder="Entar Tag"
                  type="text"
                  onChange={handleChange}
                  value={Blog.Tag}
                />
              </FormGroup>
             </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" 
              onClick={SubmitBlog}
              >
                Submit
              </Button>
              <Button color="secondary" onClick={toggleCreatBlogModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
    </>
  )
}
