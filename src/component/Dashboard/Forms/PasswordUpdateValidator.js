export default function PasswordUpdateValidator(values) {
    let errors = {};
 
    if (!values.oldpassword) {
      errors.oldpassword = '*Password is required';
    } else if (values.oldpassword.length < 6) {
      errors.oldpassword = '*Password needs to be 6 characters or more';
    }
    if (!values.newpassword) {
      errors.newpassword = '*Password is required';
    } else if (values.newpassword.length < 6) {
      errors.newpassword = '*Password needs to be 6 characters or more';
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = '*Password is required';
    } else if ( values.newpassword !== values.confirmpassword ) {
      errors.confirmpassword = '*Passwords do not match';
    }
    return errors;
}
