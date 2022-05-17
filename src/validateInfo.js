export default function validateInfo(values) {
    let errors = {};
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    function validatePhoneNumber(input_str) {
      var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
      return re.test(input_str);
    }
   
      if (!regName.test(values.username.trim())) {
      errors.username = 'Enter a valid name';
     }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    if(!values.phonenumber){
      errors.phonenumber='Phone Number Required'
    } else if(!validatePhoneNumber(values.phonenumber)){
      errors.phonenumber='Enter a Valid Phone Number'
    }
    return errors;
  }