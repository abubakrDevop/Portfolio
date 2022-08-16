import React from "react";
import slc from "./styled/Contacts.module.scss"
import { useForm } from "react-hook-form"
import { Form } from "../../helpers/form";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoGithub } from "react-icons/io"

function Contacts() {
  const {
    formState,
    register,
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {

  }

  return (
    <div className={slc.contactBox}>
      <form className={slc.inputBox} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={slc.title}>Contact us</h1>

        {
          formState.errors.name && <p className={slc.errors}> {formState.errors.name.message} </p>
        }

        <input 
          type="text" 
          placeholder="Your name..." 
          className={slc.input} 
          {...register('name', Form.Options.allInputs)}
        />

        {
          formState.errors.email && <p className={slc.errors}> {formState.errors.email.message} </p>
        }

        <input 
          type="text" 
          placeholder="Your email..." 
          className={slc.input} 
          {...register('email', Form.Options.email)}
        />

        {
          formState.errors.textarea && <p className={slc.errors}> {formState.errors.textarea.message} </p>
        }

        <textarea 
          className={slc.textarea} 
          placeholder="Your message..." 
          cols="30" rows="10"
          {...register('textarea', Form.Options.allInputs)}
        ></textarea>

        <button className={slc.button}>Send</button>
      </form>
      <img src="./images/map.png" alt="" className={slc.map} />
      <footer className={slc.footer}>
        <section className={slc.section}>
          <h3 className={slc.headTitle}>Email to connect</h3>
          <p className={slc.subTitle}>sherzodabubakr@gmail.com</p>
          <p className={slc.subTitle}>iraliev222@gmail.com</p>
          <p className={slc.subTitle}>sherDevop@gmail.com</p>
        </section>
        <section className={slc.section}>
          <h3 className={slc.headTitle}>Phone to connect</h3>
          <p className={slc.subTitle}>+1 500 000 000</p>
          <p className={slc.subTitle}>+996 501 38 49 38</p>
          <p className={slc.subTitle}>+996 557 33 63 93</p>
        </section>
        <section className={slc.section}>
          <a href="https://www.facebook.com/profile.php?id=100034252938811">
            <IoLogoFacebook className={slc.icons} />
          </a>
          <a href="https://www.instagram.com/sulayman0vv_1_/">
            <IoLogoInstagram className={slc.icons} />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter className={slc.icons} />
          </a>
          <a href="https://github.com/abubakrDevop">
            <IoLogoGithub className={slc.icons} />
          </a>
        </section>
      </footer>
    </div>
  )
}

export default Contacts