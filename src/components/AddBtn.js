import React from 'react';

import { useDispatch } from 'react-redux';
import { addRowItem } from '../helperFunctions';

function AddBtn({addRow}) {

  const dispatch = useDispatch();

  return (
    <div className="adder-wrapper text-center">
        <button className="btn-adder" onClick={() => dispatch(addRowItem())}>Add Row</button>
    </div>
  )
}

export default AddBtn;