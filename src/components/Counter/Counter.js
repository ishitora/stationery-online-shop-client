import React from 'react';

function Counter(props) {
  const { value, setValue, max } = props;
  return (
    <div>
      <button
        disabled={value === 1}
        onClick={() => {
          setValue((preState) => Math.max(preState - 1, 1));
        }}>
        -
      </button>
      {value}
      <button
        disabled={value >= (max || 10)}
        onClick={() => {
          setValue((preState) => Math.min(preState + 1, max || 10));
        }}>
        +
      </button>
    </div>
  );
}

export default Counter;
