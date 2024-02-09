import logo from './logo.svg';
import './App.css';
import ApiCrud from './Component/ApiCrud';
import { useDispatch, useSelector } from 'react-redux';
import { GETAPI } from './Redux/type/type';
import { useEffect } from 'react';
import CounterComponent from './Component/CounterComponent';
import ReduxCrud from './Component/ReduxCrud';
import { getapi } from './Redux/action/apiAction';

function App() {
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getapi())
  }, [])
  return (
    <>
            <ReduxCrud />
            {/* <ApiCrud />    */}
      {/* <CounterComponent /> */}
    </>
  );
}   

export default App;
