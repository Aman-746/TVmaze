import React, { useState } from 'react'

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formDataEntries, setFormDataEntries] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone
    };
    const newFormDataEntries = [...formDataEntries, formData];
    const formDataEntriesJson = JSON.stringify(newFormDataEntries);
    localStorage.setItem('formDataEntries', formDataEntriesJson);
    setFormDataEntries(newFormDataEntries);
    setName('');
    setEmail('');
    setPhone('');
    alert('Form data saved successfully!');
  };


  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name='name' required placeholder='Enter your name' onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name='email' required placeholder='Enter your email' onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone no.</label> <br />
        <input type="number" id="phone" name='phone' required placeholder='Enter your phone number' onChange={handleInputChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form