import axios from 'axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

const useLogin = (validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        axios.post("https://rojgar-backend.herokuapp.com/user/login", values).then((res=>{
              if(res.data.data.emailverified == false){
                alert("Please Verify Your Email First.")
              }else{
                const id = res.data.data._id;
                const firstname = res.data.data.firstname; 
                const lastname = res.data.data.lastname; 
                const profile=res.data.data.profile;
                localStorage.setItem("id",id);
                localStorage.setItem("username",firstname +" "+lastname);
                localStorage.setItem("usertype", res.data.data.usertype)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("profile",profile );
                localStorage.setItem("profession",res.data.data.job.title);
                localStorage.setItem("address",res.data.data.address.city +", "+res.data.data.address.street );
                window.location.href="/"
              }
          }))
          .catch(err=>{
              toast.error("Invalid Email or Password");
          })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useLogin;