import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";

const ReduxSample = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center bg-slate-100 mb-10 p-4 rounded-2xl ">
      <div>Current Count: {count}</div>
      <div className="flex gap-4 justify-center">
        <div className="text-2xl">
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <div className="text-2xl">
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ReduxSample;
