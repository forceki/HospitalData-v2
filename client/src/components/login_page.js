// import React, { Component,useState,useEffect } from "react"
// import  { Form,Button,Container,Row,Col }  from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

//  const Login = () => {
//     // constructor(props){
//     //     super(props);
//     //     this.state={
//     //         name :"",
//     //         email :"",
//     //         password :""
//     //     }

//     // }
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
         
   
//         // const name = this.state.name
//         // const email = this.state.email
//         // const password = this.state.password
//         const navigate = useNavigate()
//        async function Register(e) {
//             e.preventDefault()
//             console.warn(email,password)
//             navigate('/dashboard')
            
//         }
//         return(
//             <Container fluid >
//                 <Row className="justify-content-md-center  mt-5">
//                     <Col xs lg="4">
//                     <Form>    
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
//                         </Form.Group>

//                         {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                             <Form.Check type="checkbox" label="Check me out" />
//                           {name}
//                         </Form.Group> */}

//                         <Button onClick={Register}  variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }

// export default Login;