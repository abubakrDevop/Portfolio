import React, { } from 'react'
import slc from "./styled/Editor.module.scss"
import { setItem } from './localStorage'
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers/form'
import { DownloadIcon, CheckIcon } from "@heroicons/react/outline"

function Editer({setData}) {
  const [imageUrl, setImageUrl] = React.useState("")

  const details = JSON.parse(localStorage.getItem('data'))

  const [{ email, password }] = details 

  const {
    formState,
    register,
    handleSubmit
  } = useForm()

  const fileReader = new FileReader()
  fileReader.onloadend = () => {
    setImageUrl(fileReader.result)
  }
  
  function handleFiles(e) {
    e.preventDefault()
    const file = e.target.files[0]
    fileReader.readAsDataURL(file)
  }

  const onSubmit = (data) => {
    setItem("data", [
      {
        image: imageUrl,
        firstName: data.name,
        surName: data.lastname,
        status: data.status,
        email: email,
        password: password
      }
    ])
    
    setData(JSON.parse(localStorage.getItem("data")))
  }

  return (
    <div className={slc.box}>
      <div className={slc.all}>
        <div className={slc.imageBox}>
          <img src={`${imageUrl ? imageUrl : "https://www.bscliftongardens.catholic.edu.au/wp-content/uploads/sites/22/2019/05/Person-icon.jpg"}`} alt="" className={slc.image} />
          <input type="file" id='file' className={slc.file} onChange={handleFiles} />
          <label htmlFor="file" className={slc.label}>Choose image <DownloadIcon className={slc.icon} /></label>
        </div>
        <form className={slc.inputBox} onSubmit={handleSubmit(onSubmit)}>
            
            {
              formState.errors.name && <p className={slc.errors}> {formState.errors.name.message} </p>
            }

          <input 
            type="text" 
            maxLength={10} 
            className={slc.input} 
            placeholder="Type your name..." 
            {...register('name', Form.Options.allInputs)}
          /> <br />

            {
              formState.errors.lastname && <p className={slc.errors}> {formState.errors.lastname.message} </p>
            }

          <input 
            type="text" 
            maxLength={10} 
            className={slc.input} 
            placeholder="Type your lastname..." 
            {...register('lastname', Form.Options.allInputs)}
          /> <br />

            {
              formState.errors.status && <p className={slc.errors}> {formState.errors.status.message} </p>
            }

          <input 
            type="text" 
            className={slc.input} 
            placeholder="Type your status..." 
            {...register('status', Form.Options.allInputs)}
          /> <br />

          <button className={slc.button} type='submit'>Accept changes <CheckIcon className={slc.icon} /></button>
        </form>
      </div>
      <div className={slc.other}>
        <div className={slc.otherBox}>
          <h2 className={slc.text}>Personal information</h2>
          <h4 className={slc.text}>Your email: <span> {email} </span></h4>
          <h4 className={slc.text}>Your password: <span> {password} </span></h4>
          <h4 className={slc.text}>Gender: <span>not set</span></h4>
          <h4 className={slc.text}>Birthday: <span>not set</span></h4>
          <h4 className={slc.text}>Your phone number: <span>not set</span></h4>
        </div>
        <div className={slc.otherBox}>
          <h2 className={slc.text}>Connected accounts</h2>
          <p className={slc.text}>Not foud any connected accounts</p>
        </div>
      </div>
    </div>
  )
}

export default Editer
