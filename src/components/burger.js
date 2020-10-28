import React from 'react';
import { bool, func } from 'prop-types';
import { CSSTransition } from "react-transition-group"

const Burger = ({open, setOpen}) => {
  return(
    <button className="burger" open={open} onClick={() => setOpen(!open)}>
      <CSSTransition in={ open } timeout={250}
        classNames="burgerTopAnimation">
        <div className="top-bun"/>
      </CSSTransition>
      <CSSTransition in={ open } timeout={250}
        classNames="burgerMiddleAnimation">
        <div className="middle-bun"/>
      </CSSTransition>
      <CSSTransition in={ open } timeout={250}
        classNames="burgerBottomAnimation">
        <div className="bottom-bun"/>
      </CSSTransition>
  </button>
  )
}

Burger.prototypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;