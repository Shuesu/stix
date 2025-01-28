import React, { useState } from 'react';
import styles from './InputField.module.css';
import Button from '../../atoms/Button/Button';

const InputField = ({ onAdd }) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleAdd = () => {
      if (inputValue.trim()) {
         onAdd(inputValue);
         setInputValue('');
      }
   };

   return (
      <div className={styles.inputField}>
         <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a task"
            className={styles.input}
         />
         <Button text="Add" onClick={handleAdd} />
      </div>
   );
};

export default InputField;
