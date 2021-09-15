
import React, { useState, useCallback, useEffect, useRef } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    //이 안의 내용은 componentDidUpdate 업데이트 될 때마다 다시 실행된다 
    console.log(`mounted & updated': ${count}`)
    inputRef.current.focus();
  }, [count])//[]을 써주면 componentDidMount같은 역할.처음 한번만 실행

  return (
    <li className="habit">
      <span className="habit-name" >Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <input ref={inputRef} type="text" placeholer="ref"></input>
    </li>
  );
}

export default SimpleHabit;