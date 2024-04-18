'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
// internal
import icon from '@/assets/images/icon/icon_13.svg';
import ErrorMsg from '../common/error-msg';
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/database/firebase';

type FormData = {
  email: string;
  password: string;
  samepassword: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
  samepassword: yup.string().required().oneOf([yup.ref('password')], "Enter password not matched.").label("Password"),
});

const AuthSignup = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
//   const onSubmit = handleSubmit((data) => {
//     alert(JSON.stringify(data))
//     reset()
//   });

const submitForm = async(values:any) => {
    console.log("Register form value", values)
    createUserWithEmailAndPassword(auth,values.email,values.password).then((response)=>{
        // console.log('firebase user', response)
        notifySuccess(`Welcome ${response.user.email}!`); // Use notifySuccess
        reset(); // Clear the form
        
    }).catch(e=>{
        console.log('catch', e.message)
        notifySuccess("Something went wrong"); // Use notifySuccess
    })
}

  return (
    <form onSubmit={handleSubmit(submitForm)}>
    <div className="row">
      <div className="col-12">
        <div className="input-group-meta position-relative mb-25">
          <label>Email*</label>
          <input type="email" {...register("email")} id='email' placeholder="YourEmail@gmail.com"/>
          <ErrorMsg msg={errors.email?.message!} />
        </div>
      </div>
      <div className="col-12">
        <div className="input-group-meta position-relative mb-20">
          <label>Password*</label>
          <input type={`${showPass ? "text" : "password"}`} {...register("password")} id='password' placeholder="Enter Password" className="pass_log_id"/>
          <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
          </span>
          <ErrorMsg msg={errors.password?.message!} />
        </div>
      </div>
      <div className="col-12">
        <div className="input-group-meta position-relative mb-20">
          <label>Confirm Password*</label>
          <input type={`${showPass ? "text" : "samepassword"}`} {...register("samepassword")} id='samepassword' placeholder="Enter Password" className="pass_log_id"/>
          <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
          </span>
          <ErrorMsg msg={errors.samepassword?.message!} />
        </div>
      </div>
      {/* <div className="col-12">
        <div className="agreement-checkbox d-flex justify-content-between align-items-center">
          <div>
            <input type="checkbox" id="remember2"/>
            <label htmlFor="remember2">By hitting the Register button, you agree to the <Link href="#">Terms conditions</Link> & <Link href="#">Privacy Policy</Link></label>
          </div>
        </div>
      </div> */}
      <div className="col-12">
        <button type='submit' className="btn-four w-100 tran3s d-block mt-20">Sign up</button>
      </div>
    </div>
  </form>
  );
};

export default AuthSignup;