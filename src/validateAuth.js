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
  const regPhone = /^\+7\d{10}$/;
  if (!values.phone) {
    errors.phone = 'Required Phone';
  } else if (!regPhone.test(String(values.phone))) {
    errors.phone = 'Invalid phone number';
  }
  // Email Errors
  if (!values.email) {
    errors.email = 'Required Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // Password Errors
  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
}
