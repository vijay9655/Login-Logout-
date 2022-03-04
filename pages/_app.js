import Login from '../Components/Login'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div>
{/* <Login> */}
<Component {...pageProps} />
{/* </Login> */}



  </div>)
}

export default MyApp
