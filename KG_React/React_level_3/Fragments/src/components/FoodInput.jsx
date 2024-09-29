import React from 'react';

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new healthy item"
        // onChange={(event)=> console.log(event.target.value) } />
        onChange={handleOnChange} // Pass function reference, not call
      />
    </div>
  );
};

export default FoodInput;
