import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('What is Your Name?');

  const handleClick = () => {
    if (title === 'What is Your Name?') {
      setTitle('Saurav Verma');
    } else {
      setTitle('What is Your Name?');
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Click Here
      </button>
    </>
  );
};

export default UseStateBasics;
