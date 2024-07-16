import React, { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState<number>(10);

  const inscreaseBy = (value: number) => {
    setCount(count + value);
  }

  return (
    <>
      <h3>Countador: <small>{count}</small></h3>

      <div>
        <button onClick={() => inscreaseBy(+1)}>+1</button >

        & nbsp;
        <button onClick={() => inscreaseBy(-1)}>-1</button>
      </div >
    </>
  );
}
