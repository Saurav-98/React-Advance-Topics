import React from 'react';

const ErrorExample = () => {
  let title = 'Random Title';

  const handleClick = () => {
    title = 'New Title';
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
