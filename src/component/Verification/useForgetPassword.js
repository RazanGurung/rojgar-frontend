import axios from 'axios';
import { useState, useEffect } from 'react';

const useSignup = (validate) => {
  const [values, setValues] = useState({
    email: '',
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
            email:values.email
        }
        axios.put("https://rojgar-backend.herokuapp.com/forget/password",data).then(res=>{
            window.location.href="/forget/information"
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