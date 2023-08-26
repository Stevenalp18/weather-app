import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/counterSlice";
import { updateLocation } from "../redux/location/locationSlice";
import { useRef } from "react";

const ReduxSample = () => {
  const count = useSelector((state) => state.counter.count);
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();
  const locationInput = useRef();

  return (
    <div className="text-center bg-slate-100 mb-10 p-4 rounded-2xl ">
      <div>REDUX PRACTICE SAMPLE</div>
      <div>
        <div>Location: {location}</div>
        <input ref={locationInput} placeholder="input here" />
        <button
          onClick={() => {
            dispatch(updateLocation(locationInput.current.value));
          }}
        >
          Click Me
        </button>
      </div>
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
