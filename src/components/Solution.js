import React, { useState, useEffect } from 'react';
import AddBtn from './AddBtn';
import Result from './Result';
import Row from './Row';

import { useSelector } from 'react-redux';
import Notice from './Notice';

const Solution = () => {

  const rows = useSelector(state => state.row.items);

  const [result, setResult] = useState(0);


  const getSum = (data) => {
    let answer = 0;
    data.forEach((r) => {
      if(!r.disabled){
        answer += (r.operator ? r.amount : -r.amount);
      }
    });

    setResult(answer);
  }


  useEffect(() => {
    let dummies = [...rows];
    getSum(dummies);
    console.log("Rows: ", rows);
  },[rows]);

  return (
    <div className="solution-container container">
      <Notice />
      {/* Controls Wrapper */}
      <div className="controls-wrapper">
        <AddBtn/>
        {/* Row */}
        {rows.map((row, index) => (
          <Row
            key={index}
            row={row}
          />
        ))}
        {/* Row */}
      </div>
      {/* Controls Wrapper */}

      {/* Result Wrapper */}
      <Result result={result} />
      {/* Result Wrapper */}
    </div>
  )
}

export default Solution;