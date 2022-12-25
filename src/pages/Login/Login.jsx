import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login } from '../../actions/auth'
import logo from '../../assets/logo.png'
import { setAlert } from '../../actions/alert'

const Login = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit = (e) =>{
         e.preventDefault()
        let femail_pattern=/^([a-z]+)\.([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        if((!femail_pattern.test(email) && !email.endsWith("kongu.edu")) ||(!email_pattern.test(email) && !email.endsWith("kongu.edu")) ){
            dispatch(setAlert("Invalid Email","warning",2500))
            return
        }
        if(password.length<6){
            dispatch(setAlert("Password length must be greater than 6","warning",2500))
            return
        }
       
        dispatch(setAlert("Logging In","info",3000))
        dispatch(login({kongu_email:email,password},navigate))
    }
  return (
    <div className='login-container'>
        <div className="container">
            <div className="row p-5">
                <div className="login-left-side-container shadow col-sm-12  col-lg-6">
                    <h1>New Here</h1>
                    <h1>Join with us</h1>
                    <p>It's The Bright One, It's The Right One, That's Website.</p>
                    <button className='btn shadow' onClick={()=>navigate("/Register")}>Sign Up</button>
                </div>
                <div className="login-right-side-container shadow col-sm-12  col-lg-6 p-3">
                    <div className="header-container">
                        <div className="login-logo-container shadow p-2">
                            <img src={logo} alt="" />
                        </div>
                        <p className='header my-2'>Login in to dashboard </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <label className="form-label">Email</label>
                            <input type="text" placeholder='Type your mail' className='px-3' value={email} onChange={e=>setEmail(e.target.value)} required  />
                        </div>
                        <div className="form-group ">
                            <label className="form-label">Password</label>
                            <input type="password" placeholder='Type your Password' className='px-3' value={password} onChange={e=>setPassword(e.target.value)}  required />
                        </div>
                        <p className="text-end forget">Forget Password</p>
                        <div className="d-grid gap-4">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login