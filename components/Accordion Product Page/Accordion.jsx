import React, { useState, useRef } from "react";
import styled from 'styled-components'


import Chevron from "./chevron";


function Accordion(props) {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState ("0px")
  const [setRotate, setRotateState] = useState("accordion__icon")

  const content = useRef(null)

  function toggleAccordion () {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
  }
    return (
      <Styledaccordion>
      <div className='accordion__section'>
        <button className= {`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className='accordion__title'>{props.title}</p>
          <Chevron className={`${setRotate}`}  width={10} fill={"white"} />
        </button>
        <div ref= {content} style={{maxHeight: `${setHeight}`}} className='accordion__content'>
          <div className='accordion__text'>
          {props.content}
          </div>
        </div>
      </div>
      </Styledaccordion>
    )
  }
  
  const Styledaccordion = styled.div `
  /* Style the accordion section */
.accordion__section {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 175px;
  left: 2px;
  width: 635px;
  bottom: 0px;
}

/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.accordion:hover,
.active {
  background-color: transparent;
}

/* Style the accordion content title */
.accordion__title {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
}

/* Style the accordion chevron icon */
.accordion__icon {
  margin-left: auto;
  transition: transform 0.6s ease;
}

/* Style to rotate icon when state is active */
.rotate {
  transform: rotate(90deg);
}

/* Style the accordion content panel. Note: hidden by default */
.accordion__content {
  background-color: transparent;
  overflow: auto;
  transition: max-height 0.6s ease;
}

/* Style the accordion content text */
.accordion__text {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 18px;
  color: white;
  text-align: left;
}

 
  `
  export default Accordion;
