'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

interface Props {
  name: string;
  email: string;
  massage: string;
}

// type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const schema = yup.object().shape({
//   name: yup.string().required().label("Name"),
//   email: yup.string().required().email().label("Email"),
//   message: yup.string().required().min(10).label("Message"),
// });

const ContactForm: React.FC<Props> = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [massage, setMassage] = useState("")
  const [error, setError] = useState([])


  // const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
  //   resolver: yupResolver(schema),
  // });
  // const onSubmit = handleSubmit((data) => {
  //   alert(JSON.stringify(data))
  //   reset()
  // });

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(name, email, massage)


    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        { name, email, massage }
      ),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error)

  }

  return (
    // <form id="contact-form" onSubmit={onSubmit}>
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Name*</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name*"
              // {...register("name")}
              id='name'
              name='name'
            />
            <div className="help-block with-errors">
              {/* <ErrorMsg msg={errors.name?.message!} /> */}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email Address*"
              // {...register("email")}
              id='email'
              name="email"
            />
            <div className="help-block with-errors">
              {/* <ErrorMsg msg={errors.email?.message!} /> */}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea
              value={massage}
              onChange={e => setMassage(e.target.value)}
              placeholder="Your message*"
              // {...register("message")}
              id='message'
              name="message"
            ></textarea>
            <div className="help-block with-errors">
              {/* <ErrorMsg msg={errors.message?.message!} /> */}
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type='submit' className="btn-four tran3s w-100 d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
