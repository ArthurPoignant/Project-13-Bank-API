import React, { useState } from 'react';
import './Form.css';

export default function Form({ firstInput, secondInput, checkbox, button, onSubmit, onSuccess }) {
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(firstInputValue, secondInputValue, checkboxValue);
      onSuccess();
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor={firstInput}>{firstInput}</label>
        <input 
          type="text" 
          id={firstInput} 
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(e.target.value)} 
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor={secondInput}>{secondInput}</label>
        <input 
          type="password" 
          id={secondInput} 
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(e.target.value)} 
        />
      </div>
      <div className="input-remember">
        <input 
          type="checkbox" 
          id={checkbox} 
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.target.checked)} 
        />
        <label htmlFor={checkbox}>Remember me</label>
      </div>
      <button className={`${button}-button`} type="submit">Sign in</button>
    </form>
  );
}
