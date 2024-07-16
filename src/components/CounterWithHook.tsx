import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {

  const { count, inscreaseBy } = useCounter({
    initialValue: 5,
  });

  return (
    <>
      <h3>Countador: <small>{count}</small></h3>

      <div>
        <button onClick={() => inscreaseBy(+1)}>+1</button >

        &nbsp;
        <button onClick={() => inscreaseBy(-1)}>-1</button>
      </div >
    </>
  );
}
