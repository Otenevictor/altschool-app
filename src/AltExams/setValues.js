import  React, { useRef, useState } from 'react';


function Check() {
    const inputRef = useRef(null);
    const [updated, setUpdated] = useState(0);
    // handle increament....
  const handleIncrement = (event) => {
      event.preventDefault();
      setUpdated (prev => prev + 1);
  };
  // handle decrement
  const handleDecrement = (event) => {
  if(updated > 0){
      event.preventDefault();
      setUpdated (prev => prev - 1);
  }};
  const handleReset = (event) => {
    event.preventDefault();
    setUpdated (prev => prev = 0);
  };
  
    const handleClick = (event) => {
      event.preventDefault();
      // 👇 "inputRef.current.value" is input value
      setUpdated(inputRef.current.value -1 +1);
    };
  
    return (
      <div>
        <input onChange={handleClick}
          ref={inputRef}
          type="number"
          id="message"
          name="message"
          placeholder='setValue'
        />
        
        <h2 className='count'>count: {updated}</h2>
  
        <button className="action-btn" onClick={handleDecrement}>Decrements</button><br/><br/><br/>
        <button className="action-btn" onClick={handleReset}>Reset</button><br/><br/><br/>
        <button className="action-btn" onClick={handleIncrement}>Increment</button><br/><br/><br/>
  
      
      </div>
    );
  }
  export default Check;
  