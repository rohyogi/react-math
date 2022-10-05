import React from 'react';

import { useDispatch } from 'react-redux';
// import { disableRowItem } from '../helperFunctions';
import { amountChange, deleteRow, disableRow, operatorChange } from '../reducers/rowSlice';

const Row = ({ row }) => {

  const dispatch = useDispatch();

  return (
    <div className="row">
        {/* Select */}
        <div className="select-wrapper">
        <select value={row.operator} onChange={(e) => dispatch(operatorChange({ id :row.id, value: e.target.value})) } className={row.disabled ? 'disabled' : ''} disabled={row.disabled}>
            <option value="1">+</option>
            <option value="0">-</option>
        </select>
        </div>
        {/* Select */}
        {/* Input */}
        <input type="number" placeholder="Number" min="0" value={row.amount} onChange={(e) => dispatch(amountChange({ id :row.id, value: e.target.value}))} disabled={row.disabled} className={row.disabled ? 'disabled' : ''} />
        {/* Input */}
        {/* Buttons */}
        <button className="btn-delete" onClick={() => dispatch(deleteRow(row.id))}>Delete</button>
        <button className={`btn-disable ${row.disabled ? 'enabled' : 'disabled'}`}  onClick={() => dispatch(disableRow(row.id))}>
          {row.disabled ? 'Enable': 'Disable'}
        </button>
        {/* Buttons */}
    </div>
  )
}

export default Row;