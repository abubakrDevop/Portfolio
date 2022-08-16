import React from 'react'
import slc from "./styled/Login.module.scss"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from "../../helpers/form/RestApi"
import { useForm } from "react-hook-form"
import { IoIosLock, IoIosMail, IoLogoFacebook, IoLogoGoogle } from "react-icons/io"
import { Form } from '../../helpers/form'
import Self from '../personalarea/Self'

function Login() {
  const [isError, setError] = React.useState(false)

  const {
    formState,
    reset,
    register,
    handleSubmit
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const body = {
      email: data.email,
      password: data.password
    }
    
    axios.post(signIn, body)
      .then(res => {
        localStorage.setItem('localId', res.data.localId)

        if (res.data.registered === true) {
          navigate('/Personal')
          window.location.reload()
        }
      })
      .catch(error => {
        if (error.response.data.error.code === 400) {
          setError(true)
          reset()
        }
      })
  }

  if (localStorage.getItem('localId')) {
    return (
      <div className={slc.loginBox}>
        <Self />
      </div>
    )
  }

  return (
    <div className={slc.loginBox}>
      <form className={slc.loginBox_in} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={slc.headTitle}>Sign In</h1>
        <p className={slc.title}>Welcome back, please login your account!</p>
        <div className={slc.inputHeadBox}>

          {
            formState.errors.email && <p className={slc.errors}> {formState.errors.email.message} </p>
          }
          {
            isError && <p className={slc.errors}> Wrong email or password! </p>
          }

          <div className={slc.inputbox}>
            <IoIosMail className={slc.icon} />
            <input 
              type="email" 
              placeholder='Your email...' 
              className={slc.input} 
              {...register('email', Form.Options.email)}
            />
          </div>
          
          {
            formState.errors.password && <p className={slc.errors}> {formState.errors.password.message} </p>
          }

          <div className={slc.inputbox}>
            <IoIosLock className={slc.icon} />
            <input 
              type="password" 
              placeholder='Your password...' 
              className={slc.input} 
              {...register('password', Form.Options.password)}
            />
          </div>

          <input 
            type="checkbox" 
            className={`${slc.checkbox} ${formState.errors.checkbox && slc.checkboxError}`} 
            {...register('checkbox', Form.Options.allInputs)}
          />

          <p className={slc.agreement}>I agree with rules</p>
          <button type='submit' className={`${slc.logBtn}`}>SIGN IN</button>
          <p className={slc.logupLink}>
            Don't have an account? 
            <Link to={"/signup"} className={slc.link}>Sign up</Link>
          </p>
        </div>
        <div className={slc.buttonBox}>
            <button className={slc.button}>
              <IoLogoGoogle className={slc.icon}/>
              Google
            </button>
            <button className={slc.button}>
              <IoLogoFacebook className={slc.icon}/>
              Facebook
            </button>
          </div>
      </form>
    </div>
  )
}

export default Login
