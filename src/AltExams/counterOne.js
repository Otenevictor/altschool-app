import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
// import Header from "./Header";
import Check from "./setValues";



function Counter1() {
  return (
    <>
    <Helmet>
      <title>counter1</title>
      <meta name="discriction" content="counter1 with custom hook counter. "/>
      <link rel="canonical" href="/counter1"/>
    </Helmet>
    {/* <section className="navbar"> */}
      {/* <Header/> */}
      {/* <section>
        <NavLink to="/">Home</NavLink>
        <NavLink style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          to="/counter1"
        >
          Counter1
        </NavLink>
        <NavLink 
          to="/counter2"
        >
            Counter2
        </NavLink>
        <NavLink to="/error">Error</NavLink> */}

        {/* </section> */}
        
    {/* </section> */}
    <h1>Custom Counter Hook</h1>

    
    <Check/>
      <div className="switch">
      <NavLink 
          to="/counter2"
        >
          Counter2
        </NavLink>
        </div>
     
    
    </>
  );
}

export default Counter1;