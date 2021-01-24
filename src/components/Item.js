import React from 'react';
import { centToDollars } from '../utils/utils';

const priceBaloon = {
  position: 'absolute',
  top: -5,
  left: -5,
  'font-size': '18px',
  'background-color': '#CC96C0',
};

const Item = ({ size, face, price, date }) => {
  return (
    <div
      className="frostBox card text-center"
      style={{ height: 250, position: 'relative' }}
    >
      <div className="card-body d-flex justify-content-center align-items-center">
        <h5 className="card-title" style={{ fontSize: size }}>
          {face}
        </h5>
        <span style={priceBaloon} class="badge p-3">
          {centToDollars(price)}
        </span>
      </div>
      <div style={{ borderTop: '1px solid #E0E0E0' }} className="p-2">
        <div className="row">
          <div className="col" style={{ borderRight: '1px solid gray' }}>
            {date}
          </div>
          <div className="col">Size : {size}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
