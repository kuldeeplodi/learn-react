import {React,useContext,useState} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('')  
    const {setUser} = useContext(UserContext)
    const handleSubmit
    =(e)=>{
        e.preventDefault()
        setUser({username,password})}
  return (
    <div>
      <h1>Login</h1>
      <div><input type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username' /></div>
      <div><input type="text" 
      value={password}  
        onChange={(e)=>setPassword(e.target.value)}
       placeholder='password' name="" id="" /></div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
