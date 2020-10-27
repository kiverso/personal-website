import React from 'react';
import { bool, func } from 'prop-types';

const Burger = ({open, setOpen}) => {
  return(
    <button className="burger" open={open} onClick={() => setOpen(!open)}>
      <div className="top-bun"/>
      <div className="middle-bun"/>
      <div className="bottom-bun"/>
  </button>
  )
}

Burger.prototypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;