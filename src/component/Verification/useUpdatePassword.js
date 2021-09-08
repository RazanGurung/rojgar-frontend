import axios from 'axios';
import { useState, useEffect } from 'react';

const useSignup = (validate,token) => {
  const [values, setValues] = useState({
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
        const data = {
            password : values.password
        }
        axios.put("https://rojgar-backend.herokuapp.com/forget/password/update/"+token,data).then(res=>{
            window.location.href="/login"
        }).catch(err=>{
            console.log(err)
        })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useSignup;