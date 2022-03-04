// import React,{useState} from 'react'
// import {Button} from 'antd'
// import Login from './Login'

// function Register() {
//   const [regvisible,setRegvisble]=useState(false)
//   const reg=()=>{
//     if(!regvisible===true){
//      setRegvisble(true)
//     }

//   }
//   return (
//     <div>
//        <ul style={{listStyle:'none', display:'flex'}}>
//       <li><Button type='primary'href='/' >Home</Button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       <li style={{marginLeft:'1000px'}} ><Button value={regvisible} onClick={reg} type='primary' >Register</Button></li>
//       <li style={{marginLeft:'auto'}} ><Button type='primary' >SIGN IN</Button></li></ul>
//       {regvisible?<Login/>:<p>welcome to nextjs</p>}
//     </div>
//   )
// }

// export default Register
import React, { useState, useEffect } from "react";
import nav from "../styles/Login.module.css";
import { Button, Table } from "antd";
import { date } from "yup";
import { set } from "react-hook-form";
// import { mapValues } from 'async'

function Register({ val, sub }) {
  // const {val}=props
  // const {sub}=props
  // getting values from sign in datas
  const [emptys,setEmptys]=useState([])
  const [getdatas, setGetdatas] = useState([]);
  // getting values from registered hole api datas
  const [vals, setVals] = useState([]);
  // table format store data from an views
  const [tabledatas, setTabledatas] = useState([
  ]);
  const [transferapi,setTransferapi]=useState([])

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Time IN",
      dataIndex: "time",
      key: "time",

     
    },
    {
      title: "Time Out",
      dataIndex: "timeout",
    },
  ];
 console.log('first data',vals)


  useEffect(() => {
    setVals(val);

  }, [val]);

  useEffect(()=>{
    const today = new Date();
    console.log(getdatas.id);
        const tble = {
      id: getdatas.id,
      name: getdatas.name,
      email: getdatas.email,
      // time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      
    };
    setTabledatas([tble]);
    console.log('getdatas',getdatas)

  // },!getdatas?[]:[getdatas])
  },[getdatas])

  console.log("vij:", vals);
 
  const Logouttime = () => {
      emptys.push(tabledatas)

      // tabledatas[0].push({time:'vj'})
      const today = new Date();
      const v=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      const v1=emptys[1][0].time
      console.log('logintime',v1)
     
    
      // setTabledatas({id:getdatas.id,name:getdatas.name,email:getdatas.email,time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()})
      setTabledatas((prev)=>{
        return [{id:getdatas.id,name:getdatas.name,email:getdatas.email,time:v1,timeout:v}]
      // console.log('jsss',tabledatas)
    })
    transferapi.push(tabledatas)
    console.log('final',transferapi)

    document.getElementById('btn4').style.visibility='hidden'

   
  };

 
  console.log("mano:", val);

  // ***************Login button press here ************************
  const onss = () => {
    const finds = vals
    .filter((e) => {
      if (e.email === sub.email) {
        const tempstored = {
          id: e.id,
          name: e.name,
          email: e.email,
          password: e.password,
        };
        setGetdatas(tempstored);
        console.log("find values", tempstored);

        return e.email;
      }
    })

    .map((e) => {
      return e.email;
    });
    document.getElementById('btn3').style.visibility='visible'
    document.getElementById('btn4').style.visibility='hidden'
    document.getElementById('btn2').style.visibility='hidden'

    

   
    
    // console.log('hiiii')
    // const today = new Date();
    // const d={ time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}
    // getdatas.push({d})
    // console.log('pushed',getdatas)

    // const tbt={
     
    // }
    // setTabledatas([tbt])
    
    // console.log(getdatas.id);
    // const today = new Date();
    // const tble = {
    //   id: getdatas.id,
    //   name: getdatas.name,
    //   email: getdatas.email,
    //   time:
    //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
    // };
    // setTabledatas([tble]);
    // console.log('getdatas',getdatas)
  
}
// useEffect(() => {
//   // setEmptys([''])
//   emptys.push(tabledatas)
// }, [tabledatas])

const Logintime=()=>{
  // tabledatas[0].push({time:'vj'})
  const today = new Date();
  const v=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

  // setTabledatas({id:getdatas.id,name:getdatas.name,email:getdatas.email,time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()})
  setTabledatas((prev)=>{
    return [{id:getdatas.id,name:getdatas.name,email:getdatas.email,time:v}]
  // console.log('jsss',tabledatas)
})
emptys.push(tabledatas)
console.log('finalsss',emptys)
document.getElementById('btn4').style.visibility='visible'
document.getElementById('btn3').style.visibility='hidden'
// const temptime=()=>{
//   const today = new Date();
//   const d=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
//   // tabledatas[0].push({time:d})     
//   console.log(tabledatas)   
}

  return (
    <div className={nav.head}>
      <h1 className={nav.regTitle}>EMPLOYEES REGISTRATION SERVICE</h1>
      <div className={nav.reghead}>
        <img src="back.jpg" width="1366px" height="649" />
        <div style={{ marginTop: "-500px", color: "red", marginLeft: "590px" }}>
          <li style={{ listStyle: "none"}}>
       
            <Button id="btn2"  onClick={onss} type="link">
              <h1 style={{color:'lightgreen'}}>click here</h1>
            </Button></li><h1 style={{color:'white'}}>&nbsp;&nbsp;
              welcome <br/>&nbsp;&nbsp;&nbsp;&nbsp; "{getdatas.name}"</h1>
            <li style={{ listStyle: "none" }}>
            <Button id='btn3' style={{visibility:'hidden'}} onClick={Logintime} type="danger">
              In Time
            </Button>&nbsp;
            <Button id="btn4" style={{visibility:'hidden'}} onClick={Logouttime} type="danger">
              Out Time
            </Button>
           
          </li>
        </div>
        {/* <h1>{vals.name}</h1> */}
        <div style={{margin:'auto', marginTop: "30px", width: "600px" }}>
        {/* <div> */}
          <Table dataSource={tabledatas} columns={columns} />;
        </div>
      </div>
    </div>
  );
}

export default Register;
