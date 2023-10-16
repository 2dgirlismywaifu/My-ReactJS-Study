import React from 'react';

CounterFuncComponet.prototype = {
  //Declare new props variable
};
function CounterFuncComponet(props) {
  //Declare new state variable
  const [times, setTimes] = React.useState(0);
  const handleUpdate = () => {
    setTimes(times + 1);
  };
  return (
    <div>
      <p>You clicked {times} times</p>
      <button onClick={() => setTimes(times + 1)}>Click me</button>
      //Or can be written like this
      <button onClick={handleUpdate}>Click me</button>
    </div>
  );
}

export default CounterFuncComponet;
