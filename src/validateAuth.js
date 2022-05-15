export default function validateAuth(values) {
  let errors = {};

  // First name
  if (!values.firstName) {
    errors.firstName = 'Required first name';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }
  // Last name
  if (!values.lastName) {
    errors.lastName = 'Required last name';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }
  // Phone Errors
  const regPhone = /^\+7\d{10}$/i;
  if (!values.phone) {
    errors.phone = 'Required Phone';
  } else if (!regPhone.test(String(values.phone))) {
    errors.phone = 'Invalid phone number, format: +70001234567';
  }
  // Email Errors
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!regEmail.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // Password Errors
  //   ^                 # start-of-string
  // (?=.*[0-9])       # a digit must occur at least once
  // (?=.*[a-z])       # a lower case letter must occur at least once
  // (?=.*[A-Z])       # an upper case letter must occur at least once
  // (?=.*[@#$%^&+=!*()-])  # a special character must occur at least once
  // (?=\S+$)          # no whitespace allowed in the entire string
  // .{8,}             # anything, at least eight places though
  // $                 # end-of-string
  const regPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!*()-])(?=\S+$).{8,}$/i;

  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 8) {
    errors.password = 'Password at least 8 places though';
  } else if (!regPassword.test(values.password)) {
    errors.password = 'Invalid password';
  }

  return errors;
}
