import styles from '../styles/Login.module.css'
import {Button,Modal,Input} from 'antd'
import 'antd/dist/antd.css';
import axios from 'axios'
import cmpy from '../public/developing.jpg'
import { useEffect } from 'react' 
// import Register from './Register';
import { useState } from 'react';
import Register from './Register';
// import {HomeOutlined} from '@ant-design/icons';
// import { Children } from 'react';
// import About from './About';
import * as Yup from 'yup';
function Login() {
  
  // registration form visibility of 'regvisible' usestate
  const [regvisible,setRegvisble]=useState(false)
  // submit form visibility of 'subvisible' usestate
  const [subvisible,setSubvisble]=useState(false)
  // login process to success moved on nextpage fields 'nextpage' usestate
  const [nextpage,setNextpage]=useState(false)
  // axios register datas stored using 'val' usestate
  const [val,setVal]=useState([]) 
  // just login datas to be stored an 'logindata' usestate
  const [logindata,setLogindata]=useState([{
    name:'',
    email:'',
    password:'',
    confirmpassword:''

  }])
  const [finaldata,setFinaldata]=useState([{
    email:'',
    password:''
  }])
  const valid=Yup.object().shape({
    Name:Yup.string().required('required'),
    Email:Yup.string().email('invalid email address').required('required'),
    Password:Yup.string().min(4).max(10).required('required'),
    Confirmpassword:Yup.string().min(4).max(10).required('required')
  })
 

  // *********1.Button onclick event on 'Register button click'*************
 
  const reg=()=>{
    setSubvisble(false)
    setRegvisble(true)
  }

//******1.**********(A).OnOK click submission of data registered 'Register->Register'**********/
  const onSubmit=()=>{
    // alert('hiiiii')
    // console.log(logindata)
    // console.log(logindata.email)



    if(logindata.name===undefined || logindata.email===undefined || logindata.password===undefined || logindata.password !==logindata.confirmpassword){
      alert(`please enter the correct valid email id and password `)
    }
    else{
   axios.post('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/values',logindata)
    .then((prev)=>{
      setRegvisble(false)    
      setLogindata([''])
      alert(`successfully registered  user id:${logindata.email} Password:${logindata.password}` )

    })}
}
// ******1.**********(B).OnCancel click cancel of data  not registered 'Register->Cancel'*********
const createcancel=()=>{
  setRegvisble(false)
  setLogindata([''])

}


// *******2.**********Submit button click event to perform 'Submit'*********
const sub=()=>{ 
 
  axios.get(`https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/values`)
  .then((res)=>{
    setVal(res.data)    
    val.push(res.data)  
    setSubvisble(true)
    setRegvisble(false)
    // console.log(val)
    
  })  
}
// console.log([...val])
// *******2.**********(A).SIGNIN button click event to handle OnOk 'signin->submit'*********
const submitterok= ()=>{  

    
    const find=val.filter(e=>e.email===finaldata.email).map((e)=>e.email)
    const find1=val.filter(e=>e.password===finaldata.password).map((e)=>e.password)
    console.log(finaldata)
    console.log(val)
    if(finaldata.email===undefined || finaldata.password===undefined){
      alert('please enter correct Emailid and password')
    }
    else if(find[0]===finaldata.email && find1[0]===finaldata.password){
        // console.log('vijay data',find)
          alert('Login Success')
          // button visibility hidden field 
          document.getElementById('btn').style.visibility='hidden';
          document.getElementById('btn1').style.visibility='hidden';
          


          setSubvisble(false)
          setNextpage(true)
          // setFinaldata([''])
          // setBtnvisible(false)
       
    }
    else{
      alert('no datas found 404 error')
    }

}
// *******2.**********(B).SIGNIN button click event to handle Oncancel 'signin->cancel'*********

const submittercancel=()=>{
  setSubvisble(false)
  setFinaldata([''])

}





  return (
    <div className={styles.container}>
       <ul className={styles.nav}style={{listStyle:'none', display:'flex'}}>
      <li><Button type='primary' href='/'>Home</Button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li style={{marginLeft:'900px'}}  ><Button id='btn'  onClick={reg} type='primary' >Register</Button></li>
      <li style={{marginLeft:'auto'}} ><Button  id='btn1' type='danger'   onClick={sub} >SIGN IN</Button></li>
      <li  style={{paddingLeft:'23px'}}><Button type='danger'  ontype='danger' href='/'>Signin Out?</Button></li></ul>      
      
    
      <div className={styles.main}>
        
        <Modal visible={regvisible} okType='danger' okText='Register' onOk={onSubmit} onCancel={createcancel}>
          {/* <form onSubmit={onsubmit}> */}
          <label>Name</label>
          <Input  name='Name' value={logindata.name} onChange={(e)=>{setLogindata(prev=>{return{...prev,name:e.target.value}})}}/>
          <label>Email</label>
          <Input name='Email'type='email' value={logindata.email} onChange={(e)=>{setLogindata(prev=>{return{...prev,email:e.target.value}})}} />
          <label>Password</label>
          <Input name='Password' type='password' value={logindata.password} onChange={(e)=>{setLogindata(prev=>{return{...prev,password:e.target.value}})}}/>
          <label>Confirm Password</label>
          <Input name='Confirmpassword' type='password' value={logindata.confirmpassword} onChange={(e)=>{setLogindata(prev=>{return{...prev,confirmpassword:e.target.value}})}}/>
          <Button type='link' ontype='danger' style={{marginLeft:'-15px'}} onClick={sub}>Signin Now?</Button>
          {/* <Input type='submit'/> */}
          {/* </form> */}
        </Modal>  
        <Modal required visible={subvisible} okType='danger' okText='Signin' onOk={submitterok} onCancel={submittercancel}>
          <label>Email</label>
          <Input  type='text' value={finaldata.email} onChange={(e)=>{setFinaldata(prev=>{return{...prev,email:e.target.value}})}}/>
          <label>Password</label>
          <Input  type='password' value={finaldata.password} onChange={(e)=>{setFinaldata(prev=>{return{...prev,password:e.target.value}})}}/>
          <Button type='link' style={{marginLeft:'-15px'}} onClick={reg}>Register Now?</Button>

        </Modal>
        
        
      </div>

    
      {nextpage?<Register val={val} sub={finaldata}/>:<img src='wal3.jpg' style={{height:'647px',width:'1347px',overflowY:'hidden'}}/> || <p>hii</p> }

        
            </div>

  )
}

export default Login