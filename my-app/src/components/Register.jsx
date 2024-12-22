import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameValid, setNameValid] = useState();
  const [surnameValid, setSurnameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [phoneValid, setPhoneValid] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();

    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const phoneRegex =
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    if (name === 'name') {
      if (value.length < 2) {
        setNameValid(false);
      } else {
        setNameValid(true);
      }
      setName(value);
    } else if (name === 'surname') {
      if (value.length < 2) {
        setSurnameValid(false);
      } else {
        setSurnameValid(true);
      }
      setSurname(value);
    } else if (name === 'email') {
      if (emailRegex.test(value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
      setEmail(value);
    } else if (name === 'phone') {
      if (phoneRegex.test(value)) {
        setPhoneValid(true);
      } else {
        setPhoneValid(false);
      }
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    if (nameValid && surnameValid && emailValid && phoneValid) {
      alert('Form submitted sueccfully!');
    } else {
      alert('Form details are invalid');
    }
  };

  return (
    <>
      <h1>Register</h1>

      <label for="name" />
      <input
        onChange={(event) => {
          if (event.target.value.includes(' ')) {
            setName((prev) => prev);
          }
          handleChange(event);
        }}
        value={name}
        id="name"
        name="name"
        type="text"
      />
      <br />
      {nameValid === false ? <p>Name is invalid</p> : null}

      <label for="surname" />
      <input
        onChange={(event) => {
          handleChange(event);
        }}
        value={surname}
        id="surname"
        name="surname"
        type="text"
      />
      <br />

      {surnameValid === false ? <p>Surname is invalid</p> : null}

      <label for="email" />
      <input
        onChange={(event) => {
          handleChange(event);
        }}
        value={email}
        id="email"
        name="email"
        type="text"
      />
      <br />

      {emailValid === false ? <p>Email is invalid</p> : null}

      <label for="phone" />
      <input
        onChange={(event) => {
          handleChange(event);
        }}
        value={phone}
        id="phone"
        name="phone"
        type="text"
      />
      <br />

      {phoneValid === false ? <p>Phone number is invalid</p> : null}

      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
      <button type="reset">Reset</button>
    </>
  );
}

export default Register;
