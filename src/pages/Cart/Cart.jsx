import React, { useState } from 'react';
import "./Cart.css"

const Cart = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen &&
        <div className="drawer">
          <div className="text-container">
            <h2>YOUR TRUNK</h2>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon-close" viewBox="0 0 24.64 24.64" onClick={handleClose}>
              <path d="M24.64 2l-2-2-10.32 10.31L2 0 0 2l10.31 10.32L0 22.64l2 2 10.32-10.31 10.32 10.31 2-2-10.31-10.32L24.64 2z"></path>
            </svg>
          </div>
        </div>
      }
    </>
  )
}

export default Cart;