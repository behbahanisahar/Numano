import React, { useState, useEffect, ReactElement } from "react";

const Example = (): ReactElement => {
  const [count, setCount] = useState(0);
  const numbers: number[] = [1, 2, 3, 4, 5];
  const listItems = numbers.map(number => <li key={number}>{number * 2}</li>);
 

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button>Don't do anything</button>
      <ul>{listItems}</ul>
    </div>
  );
};
export default Example;
