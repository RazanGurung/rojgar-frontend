import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
toast.configure()

const useSignup = (validate) => {
  let history = useHistory();
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    gender:'',
    email: '',
    usertype:'',
    password: '',
    password2: ''
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
        axios.post("https://rojgar-backend.herokuapp.com/user/register", values).then((res=>{
              history.push("/verify-message")
          }))
          .catch(err=>{
              if(err.response.data.message == "email"){
                toast.error("Already has an account with this email address.")
              }else{
                toast.error("Already has an account with this phone number.")
              }
          })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useSignup;