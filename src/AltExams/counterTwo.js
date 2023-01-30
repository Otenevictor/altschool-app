// import { useReducer, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from "react-router-dom";
import { useReducer, useState } from "react";



const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: (state.count + 1) };
    case "decrement":
      if (state.count > 0) {
        return { ...state, count: state.count - 1 };
      } else {
        return state;
      }
    case "reset":
      return { ...state, count: (state.count = 0) };
    case "setValue":
      return {
        ...state,
        count: (state.count = action.payload),
        userInput: action.payload,
      };
    default:
      throw new Error();
  }
};
const Count = () => {
  const [state, dispatch] = useReducer(reducer, { count: 50, userInput: "" });
  const [openInputModal, setOpenInputModal] = useState(false);

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  const handleClear = (e) => {
    dispatch({ type: "reset", payload: "" });
  };

  const handleSetValue = (e) => {
    setOpenInputModal(true);
    let maxLen = String(e.target.value);
    if (maxLen.length < 50 ) {
      dispatch({ type: "setValue", payload: maxLen -1 +1 }); 
      // max input length set to 4 digits
    }else{
    //  maxLen ({payload: ""})
    }
  };

  // const handleSubmit = () => {
  //   setOpenInputModal(true);
  // };

  return (
    <div className="App">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="result">
        <h2 className="count"> count: {state.count}</h2>
      </div><br/>
      <div className="App">
        {openInputModal && (
          <div>
            <input
              placeholder="set value"
              type="number"
              value={state.count.userInput}
              onChange={handleSetValue}
            /> 
            {/* <button className="ok-btn" onClick={handleSubmit}>
              setValue
            </button> */}
          </div>
        )}
      </div><br/>
      <div class="button text-primary">
      <button className="action-btn" onClick={handleSetValue}>
          setInput
        </button><br/><br/>
      
        <button className="action-btn" onClick={handleDecrease}>
          Decrement
        </button><br/><br/>

        <button className='reset' onClick={handleClear}>
          Reset
        </button><br/><br/>
        <button className="action-btn" onClick={handleIncrease}>
          Increament
        </button><br/><br/><br/>
       
      </div>
    </div>
  );
};






// function countReducer(initialState = 0, action) {
//   if (action === 'increment') {
//       return initialState + 1;
//   } else  if (action === 'decrement') {
//       return initialState - 1;
//   } else  if (action === 'reset') {
//     return initialState = 0;
//   }else{
//     return initialState;
//   }
// }

// function Count() {
//   const inputRef = useRef(null);
//   const [count, dispatch] = useReducer(countReducer, 50);
  // const handleClick = () => {
  //   // 👇 "inputRef.current.value" is input value
  //   setUpdated(count);
  // };
//   return (
//     <div className="App">
//         <input
//           ref={inputRef}
//           type="number"
//           id="message"
//           name="message"
//           placeholder='setValue'
//         /><br/><br/>
//         <span className="count">count:  {count}</span><br/><br/>
//       <div className="card">
//         <button onClick={() => dispatch('increment')}>Increment</button><br/><br/><br/>
//         <button className='reset' onClick={() => dispatch('reset')}>Reset</button><br/><br/><br/>
//         <button onClick={() => dispatch('decrement')}>Decrement</button>
//       </div>
//     </div>
//   );
// }
function Counter2() {
  return (
    <>
     <Helmet>
      <title>counter1</title>
      <meta name="discriction" content="counter1 with useReducer counter. "/>
      <link rel="canonical" href="/counter2"/>
    </Helmet>
    {/* <section className="navbar">
      <section>
        <NavLink to="/">Home</NavLink>
        <NavLink 
          to="/counter1"
        >
          Counter1
        </NavLink>
        <NavLink style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          to="/counter2"
        >
            Counter2
        </NavLink>
        <NavLink to="/error">Error</NavLink>

        </section>
        
    </section> */}
    <h1>Using useReducer</h1>
    <Count/>
    <br/><br/>
    <div className="switch">
    <NavLink 
          to="/counter1"
        >
          Counter1
        </NavLink>
        </div>
    
    </>
  );
}

export default Counter2;