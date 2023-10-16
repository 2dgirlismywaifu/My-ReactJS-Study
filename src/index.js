import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClassComponent } from './component/ClassComponent';
import { FunctionComponent } from './component/FunctionComponent';
import { ProductDetails } from './component/ProductDetails';
import CounterComponent from './component/CounterComponent';
import CounterFuncComponet from './component/CounterFuncComponet';
import CalculatorComponet from './component/CalculatorComponet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br />
    {/*This will read title as props*/}
    <ClassComponent title="This is a demo props" />
    <br />
    <FunctionComponent />
    <ProductDetails
      title="BRICK!!!!"
      price={45}
      content="SUPREME"
    />
    {/*This is a test with state */}
    <CounterComponent />
    <CounterFuncComponet />
    <CalculatorComponet />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
