import { useDispatch, useSelector } from "react-redux";
import { addNumber, decreaseCount, reset } from "../slices/usersSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const Counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1 className="text-center mb-5">{Counter.number}</h1>
      <button className="p-4 bg-blue-400" onClick={() => dispatch(addNumber())}>
        add
      </button>

      <button
        className="p-4 bg-amber-400"
        onClick={() => dispatch(decreaseCount())}
      >
        sub
      </button>

      <button className="p-4 bg-red-400" onClick={() => dispatch(reset())}>
        reset
      </button>
    </div>
  );
};

export default Counter;
