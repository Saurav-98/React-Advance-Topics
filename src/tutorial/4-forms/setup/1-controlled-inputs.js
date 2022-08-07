import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName && email) {
      const person = { firstName, email };
      setPeople((prevVal) => [...prevVal, person]);
      setEmail('');
      setFirstName('');
    } else {
      console.log('Empty Values');
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit">Add Person</button>
          </div>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
