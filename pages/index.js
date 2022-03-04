import React from 'react'
import Head from 'next/head'

import Image from 'next/image'
import about from './about';
import About from './about';
import api from '../pages/_app'
import Login from '../Components/Login';

export default function Home() {
  return (
    <div>
      <Head>
        <title>login page</title>
        <meta name='keywords' content='web develop'/>
      </Head> 
   
      <div>
      <About/>
      {/* <Login/> */}
      
      {/* <api/> */}
    {/* <h1>Next js</h1> */}
    </div>
     
    </div>
  )
}







