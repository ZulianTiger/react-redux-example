import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Redux/Actions'

function App() {
  const currentCount = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Current count: {currentCount}
      </h1>
      <button 
        style={{height: 50, width: 150, borderWidth: 0, backgroundcolor: '#f24f41'}}
        onClick={() => dispatch(increment())}
      >
        INCREMENT
      </button>
      <button 
        style={{marginLeft: 15, height: 50, width: 150, borderWidth: 0, backgroundcolor: '#f24f41'}}
        onClick={() => dispatch(decrement())}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default App;
