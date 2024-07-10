'use client'
import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Import useRouter
// internal
import icon from '@/assets/images/icon/icon_13.svg';
import ErrorMsg from '../common/error-msg';
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/database/firebase';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const AuthLogin = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });


  // const onSubmit = handleSubmit((data) => {
  //   alert(JSON.stringify(data))
  //   reset()
  // });

    // checking user is sign up or not 
    const [nuser, setUser] = useState(null);
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("user login")
          setUser(nuser);
        } else {
          // No user is signed in.
          setUser(null);
          console.log("no user")
        }
      });
  
      // Clean up the subscription when component unmounts
      return () => unsubscribe();
    }, []);


  const submitForm = async(values:any) => {
    console.log("user is login now ", values)
    signInWithEmailAndPassword(auth,values.email,values.password).then((response)=>{
        // console.log('firebase user', response)
        notifySuccess("User Register Successfully!"); // Use notifySuccess
        reset(); // Clear the form
        router.push('/dashboard'); // Redirect to dashboard
        
    }).catch(e=>{
        console.log('catch', e.message)
        console.error('Firebase Error:', e.message);
      notifyError(e.message); // Display Firebase error message using notifyError
        // notifyError("Something went wrong"); // Use notifySuccess
    })
}

  // console.log("verify", auth.config);
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input type="email" {...register("email")} id='email' placeholder="Youremail@gmail.com" />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12">
        <div className="input-group-meta position-relative mb-20">
          <label>Password*</label>
          <input type={`${showPass ? "text" : "password"}`}  {...register("password")} id='password' placeholder="Enter Password" className="pass_log_id"/>
          <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
          </span>
          <ErrorMsg msg={errors.password?.message!} />
        </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <Link href="#">Forget Password?</Link>
          </div>
        </div>
        <div className="col-12">
          <button type='submit' className="btn-four w-100 tran3s d-block mt-20">Login</button>
        </div>
      </div>
    </form>
  );
};

export default AuthLogin;
