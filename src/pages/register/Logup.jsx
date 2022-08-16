import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import slc from "./styled/Logup.module.scss"
import { IoIosPerson, IoIosMail, IoLogoFacebook, IoLogoGoogle, IoIosLock } from "react-icons/io"
import axios from 'axios'
import { signUp } from "../../helpers/form/RestApi"
import { useForm } from "react-hook-form"
import { Form } from '../../helpers/form'
import { setItem } from '../personalarea/localStorage'

function Logup() { 
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
      password: data.password,
      returnSecureToken: true
    }
        
    axios.post(signUp, body)
      .then(res => {
        setItem('data', [
          {
            image: 'https://www.bscliftongardens.catholic.edu.au/wp-content/uploads/sites/22/2019/05/Person-icon.jpg',
            firstName: data.name,
            surName: data.lastname,
            status: 'not set',
            email: data.email,
            password: data.password
          }
        ])

        navigate('/signin')
        reset()
      })
  }

  return (
    <div className={slc.loginBox}>
      <form className={slc.loginBox_in} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={slc.headTitle}>Sign Up</h1>
        <p className={slc.title}>Welcome back, please register your account!</p>
        <div className={slc.inputHeadBox}>

          {
            formState.errors.name && <p className={slc.errors}> {formState.errors.name.message} </p>
          }

          <div className={slc.inputbox}>
            <IoIosPerson className={slc.icon} />
            <input 
              type="text" 
              placeholder='Your name...' 
              className={slc.input} 
              {...register('name', Form.Options.allInputs)}
            />
          </div>

          {
            formState.errors.lastname && <p className={slc.errors}> {formState.errors.lastname.message} </p>
          }

          <div className={slc.inputbox}>
            <IoIosPerson className={slc.icon} />
            <input 
              type="text" 
              placeholder='Your lastname...' 
              className={slc.input} 
              {...register('lastname', Form.Options.allInputs)}
            />
          </div>

          {
            formState.errors.email && <p className={slc.errors}> {formState.errors.email.message} </p>
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
          <button type='submit' className={`${slc.logBtn}`}>SIGN UP</button>
          <p className={slc.logupLink}>
            Don't have an account? 
            <Link to={"/signin"} className={slc.link}>Sign in</Link>
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

export default Logup