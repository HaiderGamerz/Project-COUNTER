import React from 'react';
import "./App.css"
import { useSelector,useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        <div className='quantity'>
          <a className='quantity_minus' title='Decreament' onClick={ () => dispatch(decNumber()) }><span>-</span></a>
            <input name='quantity' type="text" className='quantity-input' value={myState}></input>
          <a className='quantity_plus' title='Increament' onClick={ () => dispatch(incNumber(5)) }><span>+</span></a>
        </div>
      </div>
    </>
  );
};

export default App;
