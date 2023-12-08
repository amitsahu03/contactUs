import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import { useState } from "react"

const ContactForm = () => {

  const [name , setName] = useState("Amit")
  const [email , setEmail] = useState("A@A.COM")
  const [text , setText] = useState("PHUGN")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

  }
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={styles.top_btn}>
        <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize="24px"/>}></Button>
        <Button text = "CALL US" icon = {<FaPhoneAlt fontSize="24px"/>}></Button>
        </div>
        <Button
        isOutline = "true"
        text = "VIA EMAIL FORM" icon = {<HiMail fontSize="24px"/>}>

        </Button>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Message">Message</label>
            <textarea name ="text" rows={8}/>
          </div>
        </form>
        <div style={{
          display:"flex",
          justifyContent:"end"
        }}>
        <Button
        text = "SUBMIT BUTTON" >

        </Button>
        </div>
        <div>
          {name + "from" + email + "send this" + text}
        </div>

      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/Service.svg" alt="Service" />
      </div>
    </section>
  )
}

export default ContactForm;