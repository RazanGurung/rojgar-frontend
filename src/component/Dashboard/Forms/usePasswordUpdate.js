import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function usePasswordUpdate(validate) {
    const id = localStorage.getItem("id")
    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('userid')
        window.location.href = '/'
    }

    let history = useHistory();
    const [values, setValues] = useState({
      oldpassword: '',
      newpassword: '',
      confirmpassword:''
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
            const data ={
                oldpassword:values.oldpassword,
                newpassword:values.newpassword
            }
            axios.put("https://rojgar-backend.herokuapp.com/user/update/password/"+id,data).then(res=>{
                logout();
            }).catch(err=>{
                alert(err);
            })
        }
      },
      [errors]
    );
  
    return { handleChange, handleSubmit, values, errors };
  };

export default usePasswordUpdate
